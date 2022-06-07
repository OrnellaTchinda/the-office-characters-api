const express = require('express')
const app = express()
const PORT = 8000

const characters = {
    'michael scott': {
        'birthName': 'Steve Carell',
        'birthLocation': 'Concord, Massachusetts',
        'age': 59,
    },

    'jim halpert': {
        'birthName': 'John Krasinski',
        'birthLocation': 'Boston, Massachusetts',
        'age': 42,
    },

    'pam beesly': {
        'birthName': 'Jenna Fisher',
        'birthLocation': 'Fort Wayne, Indiana',
        'age': 48,
    },

    'dwight schrute': {
        'birthName': 'Rainn Wilson',
        'birthLocation': 'chicago, Illinois',
        'age': 56,
    },

    'toby flenderson': {
        'birthName': 'Paul Lieberstein',
        'birthLocation': 'West Hartford, Connecticut',
        'age': 55,
    },

    'angela Martin': {
        'birthName': 'Angela Kinsey',
        'birthLocation': 'Lafayette, Louisiana',
        'age': 50,
    },

    'Andy Bernard': {
        'birthName': 'Ed Helms',
        'birthLocation': 'Atlanta, Georgia',
        'age': 48,
    },

    'kevin malone': {
        'birthName': 'Brian Baumgartner',
        'birthLocation': 'Atlanta, Georgia',
        'age': 49,
    },

    'darryl philbin': {
        'birthName': 'Craig Robinson',
        'birthLocation': 'chicago, Illinois',
        'age': 50,
    },

    'unknown': {
        'birthName': 'Will be added soon if I exist',
        'birthLocation': 'unknown',
        'age': 0,
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:character', (request, response) => {
    const characterName = request.params.character.toLowerCase()

    if (characters[characterName]) {
        response.json(characters[characterName])
    } else {
        response.json(characters['unknown'])
    }

})


app.listen(PORT, () => {
    console.log(`The server is now running on PORT ${PORT}!`)
})