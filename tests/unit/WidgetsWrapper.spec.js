import { shallowMount } from '@vue/test-utils'
import WidgetsWrapper from '@/WidgetsWrapper.vue'
import WidgetComponent from '@/components/WidgetComponent.vue'
import { overrideOptions } from '@/assets/js/override-options/override-options'

describe('WidgetsWrapper.vue', () => {
  const wrapper = shallowMount(WidgetsWrapper, {
    propsData: { opts: [overrideOptions] },
  })
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should have props of clients', () => {
    const opts = wrapper.props().opts
    expect(opts.length).toBe(1)
  })

  it('should have at least one child components', () => {
    jest.fn()
    const stub = wrapper.findAll(WidgetComponent)
    expect(stub.length).toBeGreaterThanOrEqual(1)
  })
})
