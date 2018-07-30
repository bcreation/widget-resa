import { shallowMount } from '@vue/test-utils'
import WidgetsWrapper from '@/WidgetsWrapper.vue'
import WidgetComponent from '@/components/WidgetComponent.vue'
import {
  overrideOptions,
  overrideOptions2,
} from '@/assets/js/clients-options/oceano/oceano-options'

describe('WidgetsWrapper.vue', () => {
  const wrapper = shallowMount(WidgetsWrapper)
  const wrapper2 = shallowMount(WidgetsWrapper, {
    propsData: { opts: [overrideOptions, overrideOptions2] },
  })
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should have props of clients', () => {
    const opts = wrapper2.props().opts
    expect(opts.length).toBe(2)
  })

  it('should have at least one child components', () => {
    jest.fn()
    const stub = wrapper2.findAll(WidgetComponent)
    expect(stub.length).toBeGreaterThanOrEqual(1)
  })
})
