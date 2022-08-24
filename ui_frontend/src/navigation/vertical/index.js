export default [
  {
    title: 'Home',
    route: 'home',
    icon: 'HomeIcon',
  },
  {
    title: 'Second Page',
    route: 'second-page',
    icon: 'FileIcon',
  },
  {
    title: 'New Module',
    route: 'new-module',
    icon: 'FileIcon',
    children: [
      {
        title: 'New First',
        route: '/new-first',
        icon: 'FileIcon',
      },
      {
        title: 'New Second',
        route: '/new-second',
        icon: 'FileIcon',
      },
      {
        title: 'New third',
        route: '/new-third',
        icon: 'FileIcon',
      },
      {
        title: 'New fourth',
        route: '/new-fourth',
        icon: 'FileIcon',
      },
      {
        title: 'New fifth',
        route: '/new-fifth',
        icon: 'FileIcon',
      },
      {
        title: 'new-sixth',
        route: '/new-sixth',
        icon: 'FileIcon',
      },
    ],
  },
  {
    title: '기준정보관리',
    // route: '/system-project',
    icon: 'FileIcon',
    children: [
      {
        title: '고객사 관리',
        route: '/customer-management',
        icon: 'FileIcon',
      },
      {
        title: 'Area 관리',
        route: '/area-management',
        icon: 'FileIcon',
      },
    ],
  },
  {
    title: '자재관리',
    icon: 'FileIcon',
    children: [
      {
        title: '자재입고 등록',
        route: '/lot-registration',
        icon: 'FileIcon',
      },
      {
        title: '수입검사 의뢰 등록',
        route: '/Import-inspection',
        icon: 'FileIcon',
      },
      {
        title: '자재 불출',
        route: '/dispensing-materials',
        icon: 'FileIcon',
      },
      {
        title: '자재 재고현황',
        route: '/inventory-status',
        icon: 'FileIcon',
      },
      {
        title: '자재 반품 출고',
        route: '/return-shipping',
        icon: 'FileIcon',
      },
      {
        title: '자재 수량 보정',
        route: '/quantity-correction',
        icon: 'FileIcon',
      },
      {
        title: 'Film 설비 장착',
        route: '/equipment-mounting',
        icon: 'FileIcon',
      },
    ],
  },
  {
    title: '자재관리2',
    icon: 'FileIcon',
    children: [
      {
        title: '자재입고',
        route: '/lot-in',
        icon: 'FileIcon',
      },
    ],
  },
]
