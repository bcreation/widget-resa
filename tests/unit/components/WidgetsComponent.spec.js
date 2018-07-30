import { shallowMount } from '@vue/test-utils'
import WidgetComponent from '@/components/WidgetComponent.vue'
import { overrideOptions } from '@/assets/js/clients-options/oceano/oceano-options'
import Datepicker from 'vuejs-datepicker'
import mockAxios from 'axios'

describe('WidgetsComponent.vue', () => {
  let form
  const widget = shallowMount(WidgetComponent, {
    propsData: {
      id: 'widget-1',
      opts: overrideOptions,
      test: true,
      dev: true,
    },
  })
  const widget2 = shallowMount(WidgetComponent, {
    propsData: {
      id: 'widget-1',
      opts: overrideOptions,
      test: false,
      dev: false,
    },
  })
  beforeEach(() => {
    mockAxios.post.mockReset()
  })

  const datas = widget.vm
  const lang = datas.opts.language
  const translation = datas.opts.translation

  test('is a Vue instance', () => {
    expect(widget.isVueInstance()).toBeTruthy()
  })

  it('should have an ID', () => {
    const id = widget.find('.row').attributes().id
    expect(id).toBe('widget-1')
  })

  it('should have en-US language', () => {
    const lang = datas.opts.language
    expect(lang).toBe('en-US')
  })

  it('should have a form with his own ID', () => {
    form = widget.find('form')
    expect(form.attributes().id).toBe(
      'ticketing-research-form-' + overrideOptions.widgetId,
    )
  })

  it("should haven't a legend", () => {
    const legend = form.find('legend')
    expect(legend.exists()).toBe(false)
    expect(translation[lang].widgetTitle).toBe(null)
  })

  it('should have now a legend', () => {
    widget.setData({
      opts: {
        translation: {
          'fr-FR': {
            widgetTitle: 'title',
          },
          'en-US': {
            widgetTitle: 'title',
          },
        },
      },
    })
    const legend = form.find('legend')
    expect(legend.exists()).toBe(true)
    expect(legend.text()).toBe('title')
    expect(translation[lang].widgetTitle).toBe('title')
  })

  it('should be in dev environnement', () => {
    expect(widget.props().dev).toBe(true)
    expect(datas.urlCORS).toEqual('https://cors-anywhere.herokuapp.com/')
  })

  it('should be in test environnement', () => {
    expect(widget.props().test).toBe(true)
  })

  it('should not be in test environnement', () => {
    expect(widget2.props().test).toBe(false)
  })

  it('should not be in dev environnement', () => {
    expect(widget2.props().dev).toBe(false)
    expect(widget2.vm.urlCORS).toEqual('')
  })

  it('should have a datepicker', () => {
    form = widget.find('form')
    const dp = form.findAll(Datepicker)
    expect(dp.exists()).toBe(true)
    expect(dp.length).toBeGreaterThanOrEqual(1)
  })

  it('should return true on good axios promise', () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status: 200,
        data: {
          NextPage: 'next-page',
        },
      }),
    )
    datas.sendDatas().then((rep) => {
      expect(rep).toEqual(true)
      expect(datas.errors.show).toEqual(false)
      expect(datas.nextPage).toEqual('next-page')
    })
    expect(mockAxios.post).toHaveBeenCalledTimes(1)
  })

  it('should return false on bad axios promise', () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status: 304,
        data: {},
      }),
    )
    datas.sendDatas().then((rep) => {
      expect(rep).toEqual(false)
      expect(datas.errors.show).toEqual(false)
      expect(datas.nextPage).toEqual('')
    })
    expect(mockAxios.post).toHaveBeenCalledTimes(1)
  })
  it('should catch error on axios request', () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.reject({
        status: 302,
        errors: {
          show: true,
          msg: 'erro',
        },
      }),
    )
    datas.sendDatas().catch((error) => {
      expect(error).toEqual({
        status: 302,
        errors: {
          show: true,
          msg: 'erro',
        },
      })
      expect(datas.errors.show).toEqual(true)
      expect(datas.errors.msg).toEqual('erro')
    })
    expect(mockAxios.post).toHaveBeenCalledTimes(1)
  })
})
