/**
 * 顶部标题组件
 */
import React, { useState, useEffect } from 'react';
import './CHeader.scss';

// 轮播数据
const carouselData = [
  '济宁市微山湖旅游区达到国家5A级旅游景区标准要求，拟确定为国家5A级旅游景区!',
  '山东省文化和旅游厅发布《关于促进文化和旅游消费的若干措施》',
  '青岛市崂山风景区入选"中国最美旅游景区"榜单',
  '烟台市蓬莱阁景区推出夜游项目，游客体验度大幅提升',
  '威海市刘公岛景区新增海洋文化展览馆',
  '日照市万平口海滨风景区完成升级改造',
  '泰安市泰山景区推出智慧旅游服务系统',
  '临沂市蒙山景区举办"蒙山红叶节"活动',
  '淄博市周村古商城景区新增非遗文化展示区',
  '潍坊市青州古城景区推出沉浸式文化体验项目',
  '东营市黄河口生态旅游区举办观鸟节活动',
  '滨州市孙子兵法城景区新增军事文化体验项目',
  '德州市齐河欧乐堡景区推出亲子游主题活动',
  '聊城市东昌湖景区举办荷花节活动',
  '菏泽市牡丹园景区新增夜间灯光秀表演',
  '枣庄市台儿庄古城景区推出运河文化体验游',
  '济宁市曲阜三孔景区举办传统文化研学活动',
];

const CHeader: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % carouselData.length);
          setIsAnimating(false);
        }, 500);
      }
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [isAnimating]);

  return (
    <>
      <header className="header">山东省旅游指标监控平台</header>
      <div className="text-carousel">
        <div className="carousel-container">
          <div
            className={`text-carousel-item ${isAnimating ? 'carousel-leave' : 'carousel-enter'}`}
            key={currentIndex}
          >
            {carouselData[currentIndex]}
          </div>
        </div>
      </div>
    </>
  );
};

export default CHeader;

