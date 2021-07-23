import chai, { expect } from 'chai'
import sinon from 'sinon'
import GupoButton from '@/components/Basic/Button'
import sinonChai from 'sinon-chai'
import { shallowMount } from "@vue/test-utils";
chai.use(sinonChai)

describe('GupoButton.vue', () => {
  it('存在', () => {
    expect(GupoButton).to.be.exist
  })
  it('按钮 round', () => {
    const wrapper = shallowMount(GupoButton, {
      propsData: {
        round: true
      }
    })
    const classList = wrapper.classes()
    const hasClassRound = classList.includes('round')
    expect(hasClassRound).to.eq(true)
  })
  it('按钮 square', () => {
    const wrapper = shallowMount(GupoButton, {
      propsData: {
        square: true
      }
    })
    const classList = wrapper.classes()
    const hasClassSquare = classList.includes('square')
    expect(hasClassSquare).to.eq(true)
  })
  it('按钮 circle', () => {
    const wrapper = shallowMount(GupoButton, {
      propsData: {
        circle: true
      }
    })
    const classList = wrapper.classes()
    const hasClassCircle = classList.includes('circle')
    expect(hasClassCircle).to.eq(true)
  })
  it('按钮 nativeType', () => {
    const nativeType = 'submit'
    const wrapper = shallowMount(GupoButton, {
      propsData: {
        nativeType
      }
    })
    expect(wrapper.attributes('type')).to.eq(nativeType)
  })
  it('按钮 可以被点击', () => {
    const wrapper = shallowMount(GupoButton)
    const callback = sinon.fake()
    wrapper.vm.$on('click', callback)
    wrapper.vm.$el.click()
    expect(callback).to.have.been.called
  })
  describe('测试 size', () => {
    ['large', 'mini'].map(size => {
      it(size, () => {
        const wrapper = shallowMount(GupoButton, {
          propsData: {
            size
          }
        })
        expect(wrapper.classes().includes(`size-${size}`)).to.eq(true)
      })
    })
  })
  describe('测试 type', () => {
    ['primary', 'success', 'info', 'warning', 'error'].map(type => {
      it(type, () => {
        const wrapper = shallowMount(GupoButton, {
          propsData: {
            type
          }
        })
        expect(wrapper.classes().includes(`type-${type}`)).to.eq(true)
      })
    })
  })
})
