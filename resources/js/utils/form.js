
var form = {
    Schritt_1 : {
        rows: [
            {
             cols: [{
                data: {
                    body: 'option',
                    label: 'Anrede',
                    paragraph: 'Please fill out this field.',
                    type: 'text',
                    model: 'Anrede',
                    options: [
                        { text: 'One', value: 'A' },
                        { text: 'Two', value: 'B' },
                        { text: 'Three', value: 'C' }
                      ]

                    }
             },
             {
                data: {
                    body: 'option',
                    label: 'Titel',
                    paragraph: 'Please fill out this field.',
                    type: 'text',
                    model: 'Titel',
                    options: [
                        { text: 'One', value: 'A' },
                        { text: 'Two', value: 'B' },
                        { text: 'Three', value: 'C' }
                      ]

                    }
             }
             ],
             title: 'test1'
            },
            {
             cols: [{
                data: {
                    body: 'input',
                    label: 'Vorname',
                    paragraph: 'Please fill out this field.',
                    type: 'text',
                    model: 'Vorname'

                    }

                 },
                 {
                 data: {
                    body: 'input',
                    label: 'Nachname',
                    paragraph: 'Please fill out this field.',
                    type: 'text',
                    model: 'Nachname'


                    }
                 }

            ],
             title: 'test2'

            },
            {
             cols: [{
                data: {
                    body: 'option',
                    label: 'Adresse',
                    paragraph: 'Please fill out this field.',
                    type: 'text',
                    model: 'Adresse',
                    options: [
                        { text: 'One', value: 'A' },
                        { text: 'Two', value: 'B' },
                        { text: 'Three', value: 'C' }
                      ]


                    }
             }],
             title: 'test3'

            },
             {
             cols: [{
                data: {
                    body: 'input',
                    label: 'PLZ',
                    paragraph: 'Please fill out this field.',
                    type: 'text',
                    model: 'PLZ'


                    }

                 },
                 {
                 data: {
                    body: 'input',
                    label: 'Wohnort',
                    paragraph: 'Please fill out this field.',
                    type: 'text',
                    model: 'Wohnort'


                    }
                 }

            ],
             title: 'test2'

            },
               {
             cols: [{
                data: {
                    body: 'option',
                    label: 'Land',
                    paragraph: 'Please fill out this field.',
                    type: 'text',
                    model: 'Land',
                    options: [
                        { text: 'One', value: 'A' },
                        { text: 'Two', value: 'B' },
                        { text: 'Three', value: 'C' }
                      ]


                    }
             }],
             title: 'test3'

            },
             {
             cols: [{
                data: {
                    body: 'input',
                    label: 'Telefon',
                    paragraph: 'Please fill out this field.',
                    type: 'number',
                    model: 'Telefon'

                    }

                 },
                 {
                 data: {
                    body: 'input',
                    label: 'E-Mail',
                    paragraph: 'Please fill out this field.',
                    type: 'email',
                    model: 'E-Mail'


                    }
                 }

            ],
             title: 'test2'

            },
              ],
    },
    bar () { console.log('bar') },
    baz () { console.log('baz') }
  }

  export default form
