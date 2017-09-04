let productsData = require('../../data/products.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyWrapperShow: true,
    productsContainerShow: true,
    searchPanelShow: false,
    currentProductTitleIndex: 0,
    isEmpty: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      productList: productsData.productList,
      productTitleList: [
        { name: '综合' },
        { name: '销量' },
        { name: '新品' },
        { name: '价格' }
      ]
    })
  },

  onClassifyTap: function () {
    wx.navigateTo({
      url: 'product-classify/product-classify'
    })
  },

  onBindFocus: function () {
    this.setData({
      classifyWrapperShow: false,
      productsContainerShow: false,
      searchPanelShow: true
    })
  },

  onCancelTap: function () {
    this.setData({
      classifyWrapperShow: true,
      productsContainerShow: true,
      searchPanelShow: false
    })
  },

  onProductTitleTap: function (event) {
    this.setData({
      currentProductTitleIndex: event.target.dataset.index
    })
  },

  processProductData: function () {
    let products = []
    if (!this.data.isEmpty) {
      products = this.data.productList.concat(productsData.productList)
    } else {
      products = productsData.productList
    }
    
    this.setData({
      productList: products,
      isEmpty: false
    })
    wx.hideNavigationBarLoading()
    wx.stopPullDownRefresh()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      isEmpty: true
    })
    wx.showNavigationBarLoading()
    setTimeout(this.processProductData, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showNavigationBarLoading()
    setTimeout(this.processProductData, 1000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})