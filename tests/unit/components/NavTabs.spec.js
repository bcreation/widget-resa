import { mount } from '@vue/test-utils'
import NavTabs from '@/components/NavTabs.vue'
import { overrideOptions } from '@/assets/js/override-options/override-options'

describe('WidgetsWrapper.vue', () => {
  const nav = mount(NavTabs, {
    propsData: {
      tabs: overrideOptions.translation[overrideOptions.language].tabs,
      activeTab: 'TicketingTab',
    },
  })

  const datas = nav.vm

  test('is a Vue instance', () => {
    expect(nav.isVueInstance()).toBeTruthy()
  })

  test('should have a link with text and label', () => {
    const links = nav.findAll('li')
    for (let i = 0; i < links.length; i++) {
      let label = links.at(i).find('a')
      expect(label.text()).toEqual(datas.tabs[i].label)
      expect(label.attributes().href).toEqual(datas.tabs[i].link)
    }
  })

  test('should have two links', () => {
    const oldTab = datas.tabs[0]
    nav.setProps({
      tabs: [
        oldTab,
        {
          label: 'test',
          link: '#LinkTab',
        },
      ],
    })
    const links = nav.findAll('li')
    expect(links.length).toEqual(2)
    for (let i = 0; i < links.length; i++) {
      let label = links.at(i).find('a')
      expect(label.text()).toEqual(datas.tabs[i].label)
    }
  })

  test('should return false beacause is not the current tab', () => {
    const isCurrent = nav.vm.isCurrent('TestTab')
    expect(isCurrent).toBe(false)
  })
})
