
const text_standards = {
    "Cherokee": 
`|A 0 4 7 11 | ~ ~ 7 11 2 5 | 7 10 2 5 | 0 4 7 10 |
| 5 9 0 4 | % | 10 2 5 8 (0) | % |
| 0 4 7 9 | ~ ~ 4 7 11 2 | 2 6 9 0 | % |
|1. 2 5 9 0 | 4 7 11 2 - 9 1 4 7 (10) | 2 5 9 0 | 7 11 2 5 (3) |
|2. 2 5 9 0 | 7 11 2 5 | 0 4 7 9 | % |

|B 3 7 10 1 | 8 0 3 6 | 1 5 8 0 | % |
| 1 4 8 11 | 6 9 0 4 | 11 3 6 10 | 11 3 6 8 |
| 11 2 6 9 | 4 8 11 2 | 9 1 4 8 | % |
| 9 0 4 7 | 2 6 9 0 | 2 5 9 0 | 7 11 2 5 (3) |

|A 0 4 7 11 | ~ ~ 7 11 2 5 (3) | 7 10 2 5 | 0 4 7 10 |
| 5 9 0 4 | % | 10 2 5 8 (0) | % |
| 0 4 7 9 | ~ ~ 4 7 11 2 | 2 6 9 0 | % |
| 2 5 9 0 | 7 11 2 5 | 0 4 7 9 | 2 5 9 0 - 7 11 2 5 (3) |`,

    "The Days Of Wine And Roses": 
`|A 0 4 7 11 | 10 2 5 8 (4) | 4 7 11 2 | 9 1 4 7 (10) |
| 2 5 9 0 | % | 5 8 0 3 | 10 2 5 8 ||

|B 4 7 11 2 | 9 0 4 7 | 2 5 9 0 | 2 5 9 0 / 0 |
| 11 2 5 8 - 4 8 11 2 (5) | 9 0 4 7 - 2 6 9 0 | 2 5 9 0 | 7 11 2 5 |

|A 0 4 7 11 | 10 2 5 8 | 4 7 11 2 | 9 1 4 7 (10) |
| 2 5 9 0 | % | 5 8 0 3 | 10 2 5 8 ||

|C 4 7 11 2 | 9 0 4 7 - 9 0 4 7 / 7 | 6 9 0 4 | 11 3 6 9 (0) |
| 4 7 11 2 - 9 0 4 7 | 2 5 9 0 - 7 11 2 5 | 0 4 7 9 | 2 5 9 0 - 7 11 2 5 ||`,

    "Fly Me To The Moon": 
`|A 9 0 4 7 | 2 5 9 0 | 7 11 2 5 | 0 4 7 11 - 0 4 7 10 |
| 5 9 0 4 | 11 2 5 9 | 4 8 11 2 (5) | 9 0 4 7 - 9 1 4 7 |
| 2 5 9 0 | 7 11 2 5 | 0 4 7 11 | 4 7 11 2 - 9 1 4 7 |
| 2 5 9 0 | 7 11 2 5 | 0 4 7 11 | 11 2 5 9 - 4 8 11 2 |

|B 9 0 4 7 | 2 5 9 0 | 7 11 2 5 | 0 4 7 11 - 0 4 7 10 |
| 5 9 0 4 | 11 2 5 9 | 4 8 11 2 (5) | 9 0 4 7 - 9 1 4 7 |
| 2 5 9 0 | 7 11 2 5 | 4 7 11 2 | 9 1 4 7 |
| 2 5 9 0 | 7 11 2 5 | 0 4 7 9 | 11 2 5 9 - 4 8 11 2 |`,

    "Oleo": 
`|A 0 4 7 9 - 9 0 4 7 | 2 5 9 0 - 7 11 2 5 | 0 4 7 9 - 9 1 4 7 | 2 5 9 0 - 7 11 2 5 |
| 7 10 2 5 - 0 4 7 10 | 5 9 0 4 - 5 8 0 2 |1. 4 7 11 2 - 9 1 4 7 | 2 5 9 0 - 7 11 2 5 :|
                                          |2. 2 5 9 0 - 7 11 2 5 | 0 4 7 9 ||

|B 4 8 11 2 | % | 9 1 4 7 | % |
| 2 6 9 0 | % | 7 11 2 5 | % ||

|A 0 4 7 9 - 9 0 4 7 | 2 5 9 0 - 7 11 2 5 | 0 4 7 9 - 9 1 4 7 | 2 5 9 0 - 7 11 2 5 |
| 7 10 2 5 - 0 4 7 10 | 5 9 0 4 - 5 8 0 2 | 2 5 9 0 - 7 11 2 5 | 0 4 7 9 ||`,

    "Recordame": 
`| 0 3 7 10 | % | % | % |
| 3 7 10 1| % | % | 3 7 10 1 - 8 0 3 6 ||
| 1 5 8 0 | 1 4 8 11 - 6 10 1 4 | 11 3 6 10 | 11 2 6 9 - 4 8 11 2 |
| 9 1 4 8 | 10 1 5 8 - 3 7 10 1 | 8 0 3 7 | 6 10 1 4 (9)||`,

    "Misty": 
`|A 0 4 7 11 | 7 10 2 5 - 0 4 7 10 | 5 9 0 4 | 5 8 0 3 - 10 2 5 8 |
| 0 4 7 11 - 9 0 4 7 | 2 5 9 0 - 7 11 2 5 |1. 4 7 11 2 - 9 1 4 7 | 2 5 9 0 - 7 11 2 5 :|
                                          |2. 0 4 7 9 | % ||

|B 7 10 2 5 | 0 4 7 10 (1) | 5 9 0 4 | % |
| 6 9 1 4 | 11 3 6 9 - 2 6 9 0 | 4 7 11 2 - 9 1 4 7 | 2 5 9 0 - 7 11 2 5 ||

|A 0 4 7 11 | 7 10 2 5 - 0 4 7 10 | 5 9 0 4 | 5 8 0 3 - 10 2 5 8 |
|0 4 7 11 - 9 0 4 7 | 2 5 9 0 - 7 11 2 5 | 0 4 7 9 | 2 5 9 0 - 7 11 2 5 ||`,

    "Lady Bird": 
`| 0 4 7 11 | % | 5 8 0 3 | 10 2 5 8 |
| 0 4 7 11 | % | 10 1 5 8 | 3 7 10 1 |
| 8 0 3 7 | % | 9 0 4 7 | 2 6 9 0 |
| 2 5 9 0 | 7 11 2 5 | 0 4 7 11 - 3 7 10 1 | 8 0 3 7 - 1 5 8 11 |`,

    "Four": 
`| 0 4 7 11 | % | 0 3 7 10 | 5 9 0 3 | 
| 2 5 9 0 | % | 5 8 0 3 | 10 2 5 8 |
| 4 7 11 2 | 3 6 10 1 - 8 0 3 6 | 2 5 9 0 | 7 11 2 5 |
|1. 4 7 11 2 | 3 6 10 1 - 8 0 3 6 | 2 5 9 0 | 7 11 2 5 :|
|2. 4 7 11 2 - 3 6 10 1 | 2 5 9 0 - 7 11 2 5 | 0 4 7 11 | 2 5 9 0 - 7 11 2 5 ||`,

    "Have You Met Miss Jones": 
`|A 0 4 7 11 | 9 1 4 7 | 2 5 9 0 | 7 11 2 5 |
| 4 7 11 2 | 9 0 4 7 |1. 2 5 9 0 | 7 11 2 5 :|
                      |2. 7 10 2 5 | 0 4 7 10 ||

|B 5 9 0 4 | 3 6 10 1 - 8 0 3 6 | 1 5 8 0 | 11 2 6 9 - 4 8 11 2 |
| 9 1 4 8 | 3 6 10 1 - 8 0 3 6 | 1 5 8 0 | 2 5 9 0 - 7 11 2 5 ||

|A 0 4 7 11 - 5 9 0 3 | 4 7 11 2 - 9 1 4 7 | 2 5 9 0 | 7 11 2 5 |
| 4 7 11 2 - 9 1 4 7 | 2 5 9 0 - 7 11 2 5 | 0 4 7 9 | 2 5 9 0 - 7 11 2 5 ||`,

    "Look For The Silver Lining": 
`|A 0 4 7 11 | 7 11 2 5 | 0 4 7 11 | 7 11 2 5 |
| 4 7 11 2 | 2 5 9 0 - 7 11 2 5 | 0 4 7 11 | 9 0 4 7 | 
| 2 5 9 0 | 7 11 2 5 | 0 4 7 11 | 11 2 5 9 - 4 8 11 2 | 
| 9 0 4 7 | 8 0 3 6 | 7 11 2 5 | 2 5 9 0 - 7 11 2 5 | 

|B 0 4 7 11 | 7 11 2 5 | 0 4 7 11 | 7 11 2 5 |
| 7 10 2 5 | 0 4 7 10 | 5 9 0 4 | 5 9 0 2 |
| 9 0 4 7 | 6 9 0 4 - 11 3 6 9 | 4 7 11 2 | 9 1 4 7 | 
| 2 5 9 0 | 7 11 2 5 | 0 4 7 11 | 2 5 9 0 - 7 11 2 5 ||`,

    "Jazz Blues": 
`| 0 4 7 10 | 5 9 0 3 | 0 4 7 10 | 7 10 2 5 - 0 4 7 10 | 
| 5 9 0 3 | 6 9 0 3 | 0 4 7 10 | 4 7 11 2 - 9 1 4 7 |
| 2 5 9 0 | 7 11 2 5 | 0 4 7 11 - 9 1 4 7 | 2 5 9 0 - 7 11 2 5 :|`,

    "There Will Never Be Another You": 
`| 0 4 7 11 | % | 11 2 5 9 | 4 8 11 2 (5) |
| 9 0 4 7 | % | 7 10 2 5 | 0 4 7 10 |

| 5 9 0 4 | 10 2 5 8 (4) | 0 4 7 11 | 9 0 4 7 |
| 2 6 9 0 | % | 2 5 9 0 | 7 11 2 5 |

| 0 4 7 11 | % | 11 2 5 9 | 4 8 11 2 (5) |
| 9 0 4 7 | % | 7 10 2 5 | 0 4 7 10 |

| 5 9 0 4 | 10 2 5 8 (4) | 0 4 7 11 | 6 9 0 4 - 11 3 6 9 |
| 0 4 7 11 - 5 9 0 3 | 4 7 11 2 - 9 1 4 7 | 2 5 9 0 - 7 11 2 5 | 0 4 7 9 - 7 11 2 5 ||`,

    "Stompin' At The Savoy": 
`|A 0 4 7 11 | ~ ~ 7 11 2 5 | 0 4 7 11 | ~ ~ 1 4 7 10 |
| 2 5 9 0 | 7 11 2 5 |1. 0 4 7 9 - 9 0 4 7 | 2 5 9 0 - 7 11 2 5 :|
                     |2. 0 4 7 9 | 0 4 7 10 ||

|B 5 9 0 3 - 6 10 1 4 | 5 9 0 3 | 10 2 5 8 - 11 3 6 9 | 10 2 5 8 |
| 3 7 10 1 - 4 8 11 2 | 3 7 10 1 | 8 0 3 6 | 7 11 2 5 |

|A 0 4 7 11 | ~ ~ 7 11 2 5 | 0 4 7 11 | ~ ~ 1 4 7 10 |
| 2 5 9 0 | 7 11 2 5 | 0 4 7 9 | 2 5 9 0 - 7 11 2 5 |`,

    "Dancing On The Ceiling": 
`|A 0 4 7 9 | 0 4 7 10 - 0 4 7 10 / 4 | 5 9 0 2 - 7 11 2 5 | 4 7 11 2 - 3 6 10 1 |
| 2 5 9 0 - 7 11 2 5 | 0 4 7 9 - 9 1 4 7 (10) |1. 2 5 9 0 - 7 11 2 5 (8) | 0 4 7 9 - 7 11 2 5 :|
                                              |2. 2 5 9 0 - 7 11 2 5 (8) | 0 4 7 9 ||

|B 2 5 9 0 | ???? - 7 11 2 5 (8) | 0 4 7 11 | 7 10 2 5 - 0 4 7 10 (1) |
| 5 9 0 2 | 10 2 5 8 | 0 4 7 9 - 9 1 4 7 (10) | 2 5 9 0 - 7 11 2 5 (8) |

|A 0 4 7 9 | 0 4 7 10 - 0 4 7 10 / 4 | 5 9 0 2 - 7 11 2 5 | 4 7 11 2 - 3 6 10 1 |
| 2 5 9 0 - 7 11 2 5 | 0 4 7 9 - 9 1 4 7 (10) | 2 5 9 0 | ???? - 7 11 2 5 (8) |
| 0 4 7 9 - 9 1 4 7 (10) | 2 5 9 0 - 7 11 2 5 (8) ||`,

    "Stella By Starlight": 
`|A 6 9 0 4 | 11 3 6 9 (0) | 2 5 9 0 | 7 11 2 5 |
| 7 10 2 5 | 0 4 7 10 | 5 9 0 4 | 10 2 5 8 |
| 0 4 7 11 | 6 9 0 4 - 11 3 6 9 (0) | 4 7 11 2 | 0 3 7 10 - 5 9 0 3 |
| 7 11 2 6 | 6 9 0 4 - 11 3 6 9 (0) | 5 9 0 4 (11) | 4 8 11 2 (5) ||

|B 9 1 4 7 | % | 2 5 9 0 | % |
| 10 2 5 8 (4) | % | 0 4 7 11 | % ||

|C 6 9 0 4 | 11 3 6 9 (0) | 4 7 10 2 | 9 1 4 7 (10) |
| 2 5 8 0 | 7 11 2 5 (8) | 0 4 7 11 | % ||`,

    "Lullaby Of Birdland": 
`|A 9 0 4 7 - 6 9 0 4 | 11 3 6 9 (0) - 4 8 11 2 | 9 0 4 7 - 6 9 0 4 | 2 5 9 0 - 7 11 2 5 |
| 0 4 7 11 - 9 0 4 7 | 2 5 9 0 - 7 11 2 5 |1. 0 4 7 11 | 11 2 5 9 - 4 8 11 2 :|
                                         |2. 0 4 7 11 - 7 11 2 5 | 0 4 7 11 ||

|B 9 1 4 7 | 2 5 9 0 | 2 5 9 0 - 7 11 2 5 | 0 4 7 11 |
| 9 1 4 7 | 2 5 9 0 | 2 5 9 0 - 7 11 2 5 | 0 4 7 11 - 9 1 4 7 |

| 9 0 4 7 - 2 6 9 0 | 11 3 6 9 (0) - 4 8 11 2 | 9 0 4 7 - 6 9 0 4 | 2 5 9 0 - 7 11 2 5 |
| 0 4 7 11 - 9 0 4 7 | 2 5 9 0 - 7 11 2 5 | 0 4 7 11 - 7 11 2 5 - 0 4 7 9 | % ||`,

    "The Girl From Ipanema": 
`|A 0 4 7 11 | % | 2 6 9 0 (8) | % |
| 2 5 9 0 | 1 5 8 11 (7) |1. 0 4 7 11 | 1 5 8 11 :|
                         |2. 0 4 7 11 | % ||

|B 1 5 8 0 | % | 6 10 1 4 | % |
| 1 4 8 11 | % | 9 1 4 7 | % |
| 2 5 9 0 | % | 10 2 5 9 | % |
| 4 7 11 2 | 9 1 4 7 (10) (3) | 2 5 9 0 | 7 11 2 5 (8) (1) ||

|A 0 4 7 11 | % | 2 6 9 0 (8) | % |
| 2 5 9 0 | 1 5 8 11 (7) | 0 4 7 11 | 1 5 8 11 |`,

    "I Hear A Rhapsody": 
`|A 9 0 4 7 - 3 7 10 1 | 2 5 9 0 - 7 11 2 5 | 0 4 7 11 - 5 9 0 3 | 4 7 11 2 - 9 1 4 7 |
| 2 5 9 0 - 5 8 0 3 | 8 0 3 6 - 7 11 2 5 |1. 0 4 7 11 | 11 2 5 9 - 4 8 11 2 :|
                                         |2. 0 4 7 11 - 7 10 2 5 | 6 9 0 4 - 11 3 6 9 (0) ||

|B 4 7 11 2 | 6 9 0 4 - 11 3 6 9 (0) | 4 7 11 2 | 9 0 4 7 - 2 6 9 0 |
| 7 11 2 6 | 2 5 9 0 | 11 2 5 9 | 4 8 11 2 6 |

|A 9 0 4 7 - 3 7 10 1 | 2 5 9 0 - 7 11 2 5 | 0 4 7 11 - 5 9 0 3 | 4 7 11 2 - 9 1 4 7 |
| 2 5 9 0 - 5 8 0 3 | 8 0 3 6 - 7 11 2 5 |1. 0 4 7 11 | 11 2 5 9 - 4 8 11 2 ||`,

    "I Remember You": 
`|A 0 4 7 11 | 6 9 1 4 - 11 3 6 9 | 0 4 7 11 | 7 10 2 5 - 0 4 7 10 |
| 5 9 0 4 |1. 5 8 0 3 - 10 2 5 8 | 4 7 11 2 - 9 1 4 7 | 2 5 9 0 - 7 11 2 5 :|
          |2. 5 8 0 3 - 10 2 5 8 | 0 4 7 11 | 7 10 2 5 - 0 4 7 10 ||

|B 5 9 0 4 | 11 2 6 9 - 4 8 11 2 | 9 1 4 8 | 11 2 6 9 - 4 8 11 2|
| 9 1 4 8 | 9 0 4 7 - 2 6 9 0 | 7 11 2 6 | 2 5 9 0 - 7 11 2 5 ||

|A 0 4 7 11 | 6 9 1 4 - 11 3 6 9 | 0 4 7 11 | 7 10 2 5 - 0 4 7 10 |
| 5 9 0 4 | 5 8 0 3 - 10 2 5 8 | 4 7 11 2 - 9 1 4 7 | 6 9 1 4 - 11 3 6 9 |
4 7 11 2 - 9 1 4 7 | 2 5 9 0 - 7 11 2 5 | 0 4 7 9 | 2 5 9 0 - 7 11 2 5 |`,

    "I Got Rhythm": 
`|A 0 4 7 6 - 9 0 4 7 | 2 5 9 0 - 7 11 2 5 | 4 7 11 2 - 9 0 4 7 | 2 5 9 0 - 7 11 2 5|
| 0 4 7 10 - 0 4 7 10 / 4 | 5 9 0 3 - 6 9 0 3 | 0 4 7 6 / 7 - 7 11 2 5 |1. 0 4 7 9 - 7 11 2 5 :|
                                                                       |2. 0 4 7 9 ||
|B 4 8 11 2 | % | 9 1 4 7 | % |
| 2 6 9 0 | % | 7 11 2 5 | % |

|A 0 4 7 6 - 9 0 4 7 | 2 5 9 0 - 7 11 2 5 | 4 7 11 2 - 9 0 4 7 | 2 5 9 0 - 7 11 2 5|
| 0 4 7 10 - 0 4 7 10 / 4 | 5 9 0 3 - 6 9 0 3 @ | 0 4 7 6 / 7 - 7 11 2 5 | 0 4 7 9 - 7 11 2 5 ||

|@ 0 4 6 9 / 7 - 5 9 0 2 | 4 7 11 2 - 9 1 4 7 | 2 5 9 0 - 7 11 2 5 | 0 4 7 9|`,

    "Bye Bye Black Bird": 
`|A 0 4 7 11 | 9 0 4 7 - 7 11 2 5 | 0 4 7 11 | 9 0 4 7 - 7 11 2 5 |
| 0 4 7 11 | 4 7 10 2 - 9 1 4 5 (10) | 2 5 9 0 | 7 11 2 5 |
| 2 5 9 0 | 9 1 4 7 | 2 5 9 0 | 7 11 2 5 |
| 2 5 9 0 | 7 11 2 5 | 0 4 7 9 | % ||

|B 0 4 7 10 | 11 3 6 9 | 10 2 5 8 | 9 1 4 7 (10) |
| 2 5 9 0 | % | 8 0 3 6 | 7 11 2 5 ||
| 0 4 7 11 | 2 5 9 0 - 7 11 2 5 | 0 4 7 11 | 4 7 10 2 - 9 1 4 7 (10) |
| 2 5 9 0 | 7 11 2 5 | 0 4 7 11 | 2 5 9 0 - 7 11 2 5 ||`,

    "How High The Moon": 
`| 0 4 7 11 | % | 0 3 7 10 | 5 9 0 3 |
| 10 2 5 9 | % | 10 1 5 8 | 3 7 10 1 |
| 8 0 3 7 | 2 5 8 0 - 7 11 2 5 | 0 3 7 10 | 2 5 8 0 - 7 11 2 5 |
| 0 4 7 11 | 2 5 9 0 - 7 11 2 5 | 4 7 11 2 - 3 7 10 1 | 2 5 9 0 - 7 11 2 5 |

| 0 4 7 11 | % | 0 3 7 10 | 5 9 0 3 |
| 10 2 5 9 | % | 10 1 5 8 | 3 7 10 1 |
| 8 0 3 7 | 2 5 8 0 - 7 11 2 5 | 0 4 7 11 | 2 5 9 0 - 7 11 2 5 |
| 4 7 11 2 - 3 7 10 1 | 2 5 9 0 - 7 11 2 5 | 0 4 7 9 | 2 5 9 0 - 7 11 2 5 ||`,


};
