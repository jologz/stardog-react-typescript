export const caseNumbersQuery = `PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>

SELECT ?countyName ?cases ?population ?percentCases 
{
    # get the latest date
    { SELECT (max(?d) as ?date) { ?r :date ?d } }

    # get all the reports for the latest date
    ?report
        :cases ?cases  ;
        :date ?date ;                
        :county [
            rdfs:label ?countyName ;
            :fips ?fips
        ]                

    # look up the population of the county from Wikidata using the FIPS code
    SERVICE <https://query.wikidata.org/sparql> 
    {
        [
            wdt:P1082 ?population ;
            wdt:P882 ?fips
        ]     
    }   

    # compute percentages
    BIND(roundHalfToEven((?cases / ?population) * 100, 2) AS ?percentCases)
}
ORDER BY desc(?percentCases)`
