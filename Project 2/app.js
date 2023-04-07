let data = [
    {
      name: 'Malrath',
      class: 'Fighter with high defense and HP'
    },
    {
      name: 'Aesir',
      class: 'assasin with low HP but high damage and mobility'
    },
    {
      name: 'Wolf',
      class: 'Hunter Mostly focuses on ranged abilities'
    },
    {
      name: 'Aylia',
      class: 'Mage that provides support spells through healing'
    },
    {
      name: 'Samath',
      class: 'Sorcerer focuses on damage'
    },
    {
      name: 'Gron',
      class: 'Paladin high Hp and damage'
    }
  ];
  
  const info = document.querySelector('#info');
  
  let details = data.map(function(item) {
    return '<div>' + item.name + ' is ' + 'a ' + item.class + ' ' + '</div>';
  });
  
  info.innerHTML = details.join('\n');