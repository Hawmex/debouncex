window.searchData = {
  kinds: { 128: 'Class', 512: 'Constructor', 2048: 'Method' },
  rows: [
    {
      id: 0,
      kind: 128,
      name: 'Nexbounce',
      url: 'classes/Nexbounce.html',
      classes: 'tsd-kind-class',
    },
    {
      id: 1,
      kind: 512,
      name: 'constructor',
      url: 'classes/Nexbounce.html#constructor',
      classes: 'tsd-kind-constructor tsd-parent-kind-class',
      parent: 'Nexbounce',
    },
    {
      id: 2,
      kind: 2048,
      name: 'enqueue',
      url: 'classes/Nexbounce.html#enqueue',
      classes: 'tsd-kind-method tsd-parent-kind-class',
      parent: 'Nexbounce',
    },
  ],
  index: {
    version: '2.3.9',
    fields: ['name', 'parent'],
    fieldVectors: [
      ['name/0', [0, 1.335]],
      ['parent/0', []],
      ['name/1', [1, 9.808]],
      ['parent/1', [0, 0.111]],
      ['name/2', [2, 9.808]],
      ['parent/2', [0, 0.111]],
    ],
    invertedIndex: [
      ['constructor', { _index: 1, name: { 1: {} }, parent: {} }],
      ['enqueue', { _index: 2, name: { 2: {} }, parent: {} }],
      ['nexbounce', { _index: 0, name: { 0: {} }, parent: { 1: {}, 2: {} } }],
    ],
    pipeline: [],
  },
};
