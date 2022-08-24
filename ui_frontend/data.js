const company = [{
  id: '1',
  text: 'NS2',
  plant: 'NS2',
  expanded: true,
  items: [{
    id: '1_1',
    text: 'Customer',
    customerType: 'Custom',
    expanded: true,
    items: [{
      id: '1_1_1',
      text: 'LG 에너지 솔루션',
      description: 'LG 에너지 솔루션',
    }, {
      id: '1_1_2',
      text: 'SK Inovation',
      description: 'SK Inovation',
    },
    {
      id: '1_1_3',
      text: 'nepes',
      description: 'nepes',
    }],

  }, {
    id: '1_2',
    text: 'Vendor',
    customerType: 'Vendor',
    expanded: true,
    items: [{
      id: '1_2_1',
      text: 'aa',
      description: 'aa',
    }, {
      id: '1_2_2',
      text: 'bb',
      description: 'bb',
    }],
  }],
}]

const flags = [{
  ID: 'Y',
  Name: 'Y',
}, {
  ID: 'N',
  Name: 'N',
}]

const customert = [{
  ID: 'Custom',
  Name: 'Custom',
}, {
  ID: 'Vendor',
  Name: 'Vendor',
}]

const plants = [{
  ID: 'NS2',
  Name: 'NS2',
}, {
  ID: 'NS3',
  Name: 'NS3',
}]

export default {
  getCompany() {
    return company
  },
  getFlags() {
    return flags
  },
  getCustomert() {
    return customert
  },
  getPlants() {
    return plants
  },
}

export const priorities = ['기존자재 Roll 교체', '신규 자재 교체']
