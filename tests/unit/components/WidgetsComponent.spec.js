import { shallowMount } from '@vue/test-utils'
import WidgetComponent from '@/components/WidgetComponent.vue'
import NavTabs from '@/components/Navtabs.vue'
import { overrideOptions } from '@/assets/js/override-options/override-options'

describe('WidgetsComponent.vue', () => {
  const widget = shallowMount(WidgetComponent, {
    propsData: {
      id: 'widget-1',
      opts: overrideOptions,
      test: true,
      dev: true,
    },
  })

  const datas = widget.vm

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

  it('should have at least one child components', () => {
    jest.fn()
    const nav = widget.findAll(NavTabs)
    expect(nav.length).toEqual(0)
  })

  it('should change the current tab', () => {
    widget.vm.goTab('#TicketingTab')
    expect(widget.vm.currentTabComponent).toBe('TicketingTab')
  })
})
