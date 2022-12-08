Feature: Testando API Pokemon.

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'


Scenario: Testando retorno.
        Given url 'https://pokeapi.co/api/v2/pokemon/'
        When method get
        Then status 200

Scenario: Testando retorno ditto/ com informações válidas.
        Given url url_base
        And path 'pokemon/ditto'
        When method get
        Then status 200

Scenario: Testando retorno com informações inválidas.
        Given url url_base
        And path 'pokemon/igor'
        When method get
        Then status 404
    
Scenario: Testando retorno charizard/ e verificando o JSON.
        Given url url_base
        And path '/pokemon/charizard'
        When method get
        Then status 200
        And match response.name == "charizard"
        And match response.id == 6

Scenario: Testando retorno mewtwo/ com id inválida
        Given url url_base
        And path '/pokemon/mewtwo
        When method get
        Then status 404
        And match response.name == "mewtwo"
        And match response.id == 151