I made this in nest

http://localhost:3000/api/v1/stats/drafts-by-team?teamName=warriors

results in 
```
{
    "Team Name": "Golden State Warriors",
    "Draft Rounds": {
        "draftCount": {
            "1": 1,
            "2": 0,
            "null": 0
        }
    }
}
```
Only one matching player for the team. getPlayers() response is only 25 total. So I am questioning the results.