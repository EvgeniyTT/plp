export const categories = [
  {
    id: 0,
    name: 'bags',
    label: 'Bags'
  },
  {
    id: 1,
    name: 'backpacks',
    label: 'Backpacks'
  },
  {
    id: 2,
    name: 'accessories',
    label: 'Accessories'
  },
  {
    id: 3,
    name: 'luggage',
    label: 'Luggage'
  },
  {
    id: 4,
    name: 'pouch',
    label: 'Pouch'
  }
]

export const colors = [
  {
    id: 0,
    name: 'domino',
    label: 'Domino',
    color: '#282828',
    image: 'data:image/png;base64,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'
  },
  {
    id: 1,
    name: 'scuba',
    label: 'Scuba',
    color: '#19283d',
    image: 'data:image/png;base64,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'
  },
  {
    id: 2,
    name: 'derby',
    label: 'Derby',
    color: '#18171b'
  },
  {
    id: 3,
    name: 'flamingo',
    label: 'Flamingo',
    color: '#f1a4c6',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0NCOTcyNzlDMjJCMTFFNzkwQ0ZCRkExMTQ3MDY3NDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0NCOTcyN0FDMjJCMTFFNzkwQ0ZCRkExMTQ3MDY3NDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3Q0I5NzI3N0MyMkIxMUU3OTBDRkJGQTExNDcwNjc0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3Q0I5NzI3OEMyMkIxMUU3OTBDRkJGQTExNDcwNjc0OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoYVXygAAArDSURBVHja5FtLU1zHFT7d984AI+aBAIEQejqyIieOU5WqrPILssgivzHbuCqbrLx0pcpJZZGyLUUpl+UokiUKPRBYSDBz+6TPq7sHCywEyBga3ZrRfXSf53e+Phfc8z/9DY5idP54A9fvfwGbD+4Cro5gcmseWjAA7+p41eldCAFHMIQ1eDWxCm6+hs6Fq9Bb/iVsfnzHHYVc7jAVbv9+CZ98+SlU37Sh45YPNNcm3ofmyjbM/uJ3sP3Xb92xUnj02yG+/Od/odv87EiiZaP6CqZ+cxnqv7cOrLg/qKLRExgFOTJladDctAatRWu+c4UpdJ+3b7GiBw3dfeFCXIvWpLVJhncS0psfPMLOrYUCeH6sgVGWFejcWnRH5uG17udR2cVjoCz7ipRlmQ5dYSoxm+4eDjY+hOM2SCaSjWQ8FIUn/3AFn/35U+jgJTiug2QjGUnWAylMVnv+l3/AhJuH4z5IRpL1hzy9J2hxqBxjz+4iM3nc7dvDDFA/MWUtvPcCMr9b6TmOALUvIIs6vJHCVNClzv60B+nwOnLyPYVXP/nkmNTZg9dp0WUPhYmn9rc/gJMySJed3HtM4e3PVuCkjZ06+dK773Ij8C43HKWXk8K0nz2po9TNGzIf5X72xx6kmyE2K0xtmZM+TEdWmHpQJ32Yjm64+QQ3P74Dp2HEjQV4aqWelkG6euobn5ZBunpqkp+WQbp6eiNwWgbp6un1x2kZ/KpH3vWcjkG6+pOxFXzzLWN9e2kdmtEItl6+4lMTUxPgnIPhcAgBMX6voKpraLUnZJMx3AYMIYaG5/scvwEM0DRN/Oagqio575Dva0YN9czlvK940RAQRiMBy1YrWr2iuWQbjrymi94Qmk9zECfkOePzrpK3j4g0bwAX7wd9JgoVL8k6juSjn3jNfmjUtBIv4sXTJAytxYvSA97xd6TJ+YdXV2VhrFkgi+spdEzkvG1P9Autxf+tJLhkfr7C/2TePKfdT0I5XYOnxrzNdc4C1aVn0n1lSEcZarF49Fj0AE0SoqcgyEU7gIxhlvYOHJRC0eTxfMBCaSf2jIJQdNh97K1oONKQzns1ZloXLBKc6E9Cq2ISAU4ME2QuWUIiTU2m9wcSVxwFZtDoXYqmOi7MXiULxod5kSBusnOinIQFq0ozuJwXdJ+PYWRhCCmA7JoXYV02kneg87g8D1hcF3PT+hSirowQ1LTxaY7iER1qXFCjxXtarTbUk50p+G79uYQXBbEPoGmhhyrIyiZ5s0q8aMzzds1WD6HRBSAthiACYaGfeBtTanjOb1sTJYQpEqpaU0ouWoR4PW/nbE0zghmGU1GN1Z6cBD/d7ea84YkqBZ4CNNhSLoXOGO45zS8vR+kxUSAwuCSDJSdjzsPyebAwVM+qd1M0GH7o/c7+7yRGPN9bnE/g6mByagrq3mCGFUQV3tdtCWBSlI+GhYixr0bAhEtgIUhIHcz6UAAaJjAiQbCwBQtIwlQ6bwI8RWnClPjJlYJrqACoRZwdCd7BJwX5XFAHFmDZ6XSg7g4GIgDmUIPCmkgIxiCh4OW9Rivm+DZgIMtaSFquSa7kc2otzyWmUvR2ghsc4loFVEgBp/hpZSatmfMZtGwpMKRotWgwcc90p6GuWx3X7fXxu/V1nmB7a4tvqtttRlEg0CZPx7rsI+DWVYutH9T7hK40Z1W3JHf0XNMMpRTUohCdCyo8A1wr3h8nREZommskZYnSiRSMzxtOMO42IRmPPWchiYbWqZCPpZ/4BWE6KlvVU5KoZ+fP5RJAwEMkgg6FfiiszcDEAuIYMBgijoVbAULj131O5jEv2SGlhZTxmvv0PAMiyaSAVz5rSpbehQRqAL1BX4lHHHOLi3D3zr/Fs3UlAo6GwNnrUeul5MJo65XGpJISFaiJDCxYCdIiz0JyfdU8rHKJIQbmXDCHcdS4Qkj2IinA/ACUyWFOITWe4YgzsPK+wBZLJYDBzEzuaU12+m42Ki1JXkmJ0DLAAOJrpZJFXhWUzuVak1HZ6nmJxuDGlBLaGER475NRQWkkKBVNQJjQPNdzKJA4VQijCRpZ/UEvlqRplzxMY+niJXj+9FkKa1PQqeURZZaqLhRkL8hnZavQIpTDMee5zlaVWl1zkamrRA0khqTMymVpvZNICzG3pV77zMyMTBD6R2ckr2IBZBYpMQ1m5+e+/+ZhMHfe9aLbE1pyyajSZIFJRdByMm5VB24HxdOcxZIR7fRCwaHNU5BDFGE8xXPulxcKeqUYZDhjDxLP6J09lwjE2GZ46dJFeLbyiB8krmthFnjXM0z44CEzmuQZAzDDViMDVhuh/D5eu9l7mk7GwCw1nBRxLnloZZPO+2xc8mJaH3Nu0+e55Qu7vz2cmVty8+fPCyQouiHkeoYsZMNH0t68qhGAWABUlbfbxom9glaikFDW/IJGF/XV1h7bTOhzaIRnJ5WO9/fPzkR0nne7Kkzjyvs3oBU5J03cNCPxQBS2inW5irVTvD2SmqooStfZEHR/wMx1lcGJEZzigk8cWEJVuLjka2BmhSDMzCe6CakMOi8bFUZ78IlH83niCJEPmFEXLyzv/X6YGwARsa/euAE7DK0TVlI+Cs6cQRgTVsj+VMIQElqqQo0Qk5JVJc4emsS7DZlLQVLt1bnH6j2UzM7BhcuXEjKPcX/E1//+x9e3/4UrD+5r7riUG5X3mdAUgAHUgeC1am0kNGM7LK1yWnedGk4BCotr1nzwuY4aIktYCy2t2JM+78hCoylQRV6xAMtXr7+2d7Xrb/Fcu/mRG5ydzSBa7I9z+yXX5ISiDsbZGWbEBtjBqhS8SsM42NFlSyEUiq1gyKWHarXzCaGn+91dld1TYRrXP/wVTPe6bG1fi0coHKkfxfQTM1PaST6sR2D7Y/JGK2JAK2JBq10nIILkcZ+3pW6n2sIN2Iu6XUUsO1Uyx5lYgq5ef3/vzuVeF2lj8fOPfg3dfk9oXkLLUHQeMMlXlNixjoR1SZxu11KTrWRPZiEHBR/3aatpz/qCkeVmAbCy127ejMA6tWcbdtccLkcz3MSvbt+OTOxptm5Azbnc6EucDsv8C2MbfQY+r/lrzCrkbaDTfa91QATgQsHK1E9MPcWYvUgdr7z3Hu+GfrBR+yYK2/jmP1/i6qOHokhjLRrIG+1SKLQWAWr9lq6JUUHvc3PN6GxW2GtLF5imGvNLHJxm1do9f24BLl67/sbN9X0pTOPxo/t47+u7MBpuKSuCsU5DwAasfeKgVErbRLYhsJ5yiQEOUjMhbfVj3kok5Q6ItHlruHj1CswuLO/rTcK+Faax9XID/3f3LjxZWcl9aC5fmfUYhUx5XdYdhIzuID1xr4CFJVxhSOWGIsN66DPz87HOXo51trvv1yZvpbCNtSeP8OG9e7C+tpbrZdHUK/8+yacmntZdC2HdeFDPTJrtuUNKyjajbfVoC7qDGVi4sBQp48Jbvx86kMJJ8ccPceXbB/B0dTVtHIzepTZMsFx0Yy1A289C0Z1M3ClSVXq1M5ibg4WlZejPLh74RdihKJxDfR0fxzB/EhV/sbGhLd8We2q49ZK9WvG7JGnal23ZDFi8s+YeVK/fj8rOwsRU//D+UOswFS7HKJYyagy+fLEZjxewsfYMXr3a1Ga8kAxuCEYy0m61oT3RgqnOGejEekp72DcpMW8z/i/AAFF0+1ytLWToAAAAAElFTkSuQmCC'
  },
  {
    id: 4,
    name: 'scout',
    label: 'Scout',
    color: '#c18536',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAALWklEQVRogeWbS2xV1xWGv7X2ORfb+PoBBswrQFLyaNOm6aRRB8mklTqp1Egddd55h5UySQeVMsw884wiESmTSMkEBlEyCYpEQoqjmFewCXANxuDHvWevDvbjnGsHF+NX0i50EZx7zj7rX49//XsbxMzYDustdmz++gUWZi/x4M5lFudusLJwi+7SPL63DIAWeygHRmgNH2Bw/Ah7959kePJZRo69SDG4T7bDL9lKwEtzV+z212e5/c0n3Lt2flNrjR5/mYmf/Y6J519jYPzEloHfEsCdqXM288UH3L50bgtcWmsTz77K4Zf+xL7Tr24a+KYAd6bO2dVP3910Nh/XRo+/zFOv/HVTwJ8I8NLcFZs++w7ff/XRk753U3bw53/g1Gt/e6JS3zDg2fNnbOrjt/HdpY2+a0tNywFO//7vTL78+oZAbwjw1Idv2Y3Pz2zYue20I795ndN//Mdjg34swL3Fjl18/006059tyrntsn2nfssLf37zsUbZfwW8cn/GLrz3BvdnvtwyB7fD2od/wYt/+Ret9uF1Qet6X/YWOz8JsAD3Z77kwntv0FvsrJvBdQFffP/NnwTYZPdnvuTi+2+ue88jAU99+Jb9WHt2PetMf8bUh289Mss/CHj2/JkfHRtvxG58fobZ82d+EPQawEtzV2zq47e336tttqmP32Zp7soa0GsAT599Z9dFxVaY7y4xffadNdf7AHemztluycXtsO+/+ojO1Lm+LPcBvvrpuzvr0Q7YakwZcGfqnO3Urmcn7d61831ZzoBnvvhgdzzaAWtiU4gnFdu0ef8x2O1L5zJjK8Dtr8/urkc7YAljAPzNJ7vqzE5Ywqi9xc7/JFmttnvXztNb7JjOX7+w277smM1fv4AuzF7abT92zBZmL6EP7lzebT92zB7cuYwuzt3YbT92zBbnbqArC7d2248ds5WFW2h3aX63/dgx6y7No+kHW/8P5nvLFAOv/JOq12N5MeyB9wzuQUTodrt4M0QcrigoW3sA6HVXMO9RVUQEwfDmqaoKQ3DOhetimPdUvQqMcF0dIHhv9Ho9AMqyQJ0iAgiYGSKCSpD55j0GYU11iCsAwawC84gZxGdQBQnvEVUEQcxIvwAKRMJLNJxuem+IhhcogqggIpj5sACASARL8DJaeHm8ZAIomrYn8Q/pWFidghDXBwjPhnXrNfMxsigS32ECNI6XRTS6IfmZfF/DVJUiRNyjzoEZvqrAhy/TBxVIkVZBaDpliIF4a4CWEE9RXFHk+8x7zDyI4IoCjcHM7yVVggT8ZhlwqAAJgfFhrfCKUGkxZPF+j/cheEYKKBRlgRZFEbIqiqiGl/iQpnQtgAtlIUQnc/TCfaoulyG5gNJ3GpyVOkgqxHWkXodU1421VUOJSrNCLLaN5jUaj0SLwSUGTYSybFEMDA2yMH8vlBeKqCe2RfxEgFi9ljUgiYY+bxWY93hfxReQX2YEh6yBL2TbcmuouggogopgnCtiS4UvU4VovJ6upXemIKTAmPkcrNbAADrcbtd9I4I6F4mnQRrmY7bW/hQjlFqshJTJRqjNPMRIN9qsjiirnieVYcxszG6uhsQf8X5Jf5dQIyqa78/3RXwDg4MUI2PjOOciE4IWrVDA3sdPBQhaFDEIlnmJVIIY3qfoQ01olsoBFa1JJPmuiri4bia8yNLOgUiYFIBKINBUcemT6R3NABEBHxPYIMuhoSGK9thYcMDqUqMRTcNHkojkpRqrNXVN6veYqVSSqddCr9TXYrRUHeJcZG8JvGGWyUmik4GcDEtjJr+z7udQaUIkhlytqRqSu3vbwxRFOSTtkVFbmJ/HzFhZXkZEKFotVAUq8N5j3S5aQOFK1LlwzVf4qkIEXFGG3onXqqoLgBYBkK8qfHRe1aFliWiBmeErj/leGEvOIRhWdTNPGOArn4OHCJpK0hJb50He134hL8ZwexhXDIZG3XfgYD0CvMdXFVZVmfpTNFOZBwetjxgSI/aVW25VW/W91s3cl6X0CaMF82jsfbNIiN6HEdmootQnsiq7ZFKDkbFRAAqAiclJpv/9dchs4YKDvS4VIGpxXoZe6C0vxZqMoiQ6VHVX8GkEEea4mY/zNfahq0dM1asQ8SlhaFRoyUlEQt86B0ZUcglgfG/u3zSiauJrihAMxsbHg18AA0Ojsn9yMja5CyMijgERQbWIUrLRVw1Jl9k7ZdrC96kv636XPlBBNvrgvGoOKlFGEqVoJsLM5vU8p8HEeUIkmRAra3RshNbAsOQMAxw5/hT3OnO5rBNAiZE3C6u4ogFQBI0pcuktZlhVUXW7Yc46F6Mee9FbrprkoEWxYVJ7qxIqzftenNdaK7MkJgxUizqriTBjIDADX7H/wERuzXwQPzZxWEbGx2u2VG04G+Sn9z6Ok/6oCo2/EzVZzHKtiFZnoaGhU6ZyKdbKqfa/bqv6i2SpV2ueSQ8Ot9uM7DuYBUTReIojTx1n7uYsZoYrilxm3nuqXjfzg1IrmpyZRGCJW5MYSLOR5p/7Z7eIorGdkgJLrSFhiINoCI2P17UOLr6q3291b4sIB48dbULs/2Ha+MQROXD4cKCEyG5GPc8Mw/sK7ysy+pTVWAFmDYJyaRdD1sQaSStLyAarNjm3OV/Tu/s2E/E5S4KnznV+fnTfOCNjB/rk4ZqfD5989jnKgQHMjKrqhQyo4lotXFnGbPfCTI0sKqohEFUvtETSulHBhSBI5IVUGWk7GLR46FePt1AhGhk/938cg6JhoyLqEDTraFFFXYkWZQ7q5NFjq+GtBbxnaFROPfdcfSHLXUWdC+OjoZlrEk4AAojY7KSbMqAqCJOmqkoVYr7Kujsxc9ORPHvj2n3znqayE46eeCozc9Me+e+0vr34hd387nrsHcm94VRrQROWiKir6GSghVT2jQFC2kQlrZzUUcYB9eFD6lGrGTmUdZClrijjzE9kFfbTIo6JyUMcO3V6DVhY51/xPP3CSzK2b39NotRzsD5+qWdyZtHGa5KzibFpdGna3ZAzk8NHn6e5hHyeq5arQMKslrSP9wyPth8Jdl3AAKd/+SuGR9qoClqEjPiqotfrBflptVJaLT4kjuW0P1ZVyrKkbLUoW0UmogBeUKf1tlRWww7awHwVZWVk8rxCWGNvu82p08+uB2l9wEU5JM+/9GvaoyNB5mW29HnAi1j2rzFiG/M3zun4vKYTjLyX1cZMT+vIqufJz2pDkdWHBbC33ebpF17AlYOPzC6s08NNq7oP7ZuLF7nX6dTR9RZ7rj7oy5rOmv3n64aXSHwa+zcpq3xGFVtDJZ+ABILzDVUW86Qu6HmEkbERTj7zDK5YH+xjA052+dKXdmt2JgCp0hENUYNrv1MRdKyJuDWULAU1n1aS5WwNWOORLlhi9LR+OjKKs/vAwUMcf/rRPbspwAC3Z6/b1W+n6XWXoypqKCgRvFWk4xOhCSoeE6UNQTpTpsEBMeM1oYH5KlZSfQICoK7g+KmT7D907LHBPhFggOXF+3Ztepo7N2+m3VocX7XqSRIy93Vz7hg1uxPOxDUSVlouos3jRrUIysqM8QMHOHriBK2B9obAPjHgZHfvzNrM1avM371bz8sIqtbMAJY38sFp6p6NGw8tivBcHFVCyG7VWwmAXUl7bJxDR48wuu/QhoFuCeBkd2/P2M0b39G5dStvHJK8C33ns8DPRzHp99QOjdPJrJ2qHr3uCmMTExw6cozR/ZNPDDTZlv5HreXFebt98yZ3bt3iwf378ci3xHxFd3kR8x5XFoGpG1VgKatx4y/AcHuYkdFRxib2s2dwdNNAk20p4Kb1ug9tYX6exQcPWXzwgPt351haehgP44PIKFyJliWtskVrT8ng0F6G2m2G2+3HGjFPYv8BczlQA+PpxNcAAAAASUVORK5CYII='
  },
  {
    id: 5,
    label: 'Roulette',
    name: 'roulette',
    color: '#ae272c',
  },
  {
    id: 6,
    label: 'Cadet',
    name: 'cadet',
    color: '#282828',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzM1Qjg3RkY5MDkzMTFFNzg3RTZBQzQwQkQ5QTQ2RjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzM1Qjg4MDA5MDkzMTFFNzg3RTZBQzQwQkQ5QTQ2RjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMzVCODdGRDkwOTMxMUU3ODdFNkFDNDBCRDlBNDZGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMzVCODdGRTkwOTMxMUU3ODdFNkFDNDBCRDlBNDZGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtWy5TQAAAkOSURBVHja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'
  },
  {
    id: 7,
    label: 'Bebop',
    name: 'bebop',
    color: '#e53939',
    image: 'data:image/png;base64,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'
  },
  {
    id: 8,
    label: 'Jetty',
    name: 'jetty',
    color: '#21416a',
    image: 'data:image/png;base64,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'
  }
  ,
  {
    id: 9,
    label: 'Mallard',
    name: 'mallard',
    color: '#407e67',
    image: 'data:image/png;base64,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'
  }
]

export const filters = [
  {
    id: 0,
    case: '1-1',
    prop: 'categoryId',
    name: 'category',
    options: categories
  },
  {
    id: 1,
    arr: 'colors',
    prop: 'colorId',
    case: '1-many',
    name: 'color',
    options: colors
  }
]

export const products = [
  {
    categoryId: 0,
    colors: [
      {
        colorId: 0,
        isAvailable: true,
        isBestSeller: true,
        isPersonalize: true,
        image: '1_domino.png'
      },
      {
        colorId: 4,
        isAvailable: false,
        isPersonalize: false,
        preoderDate: '03/15/18',
        image: '1_scout.png'
      },
      {
        colorId: 8,
        isAvailable: false,
        image: '1_jetty.png'
      },
    ],
    description: 'some description',
    id: 0,
    label: 'Label 1',
    name: 'product',
    price: 345
  },
  // {
  //   categoryId: 4,
  //   colors: [
  //     {
  //       colorId: 6,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description2',
  //   id: 1,
  //   isBestSeller: true,
  //   isNew: true,
  //   image: 'BB-Lrg-Pouch-PLP.png',
  //   label: 'Label 1435',
  //   name: 'product',
  //   price: 277
  // },
  // {
  //   categoryId: 4,
  //   colors: [
  //     {
  //       colorId: 6,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description3',
  //   id: 2,
  //   image: 'BB-Med-Pouch_PLP.png',
  //   isBestSeller: false,
  //   isNew: false,
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 114
  // },
  // {
  //   categoryId: 4,
  //   colors: [
  //     {
  //       colorId: 6,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description4',
  //   id: 3,
  //   isBestSeller: true,
  //   isNew: false,
  //   image: 'BB-Sm-Pouch_PLP.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 113
  // },
  // {
  //   categoryId: 0,
  //   colors: [
  //     {
  //       colorId: 7,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 4,
  //   isBestSeller: true,
  //   isNew: true,
  //   image: 'Bebop-dropdown-menu.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 534
  // },
  // {
  //   categoryId: 0,
  //   colors: [
  //     {
  //       colorId: 1,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 8,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 5,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'bluee.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 534
  // },
  // {
  //   categoryId: 2,
  //   colors: [
  //     {
  //       colorId: 1,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 6,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 6,
  //   isBestSeller: false,
  //   isNew: true,
  //   image: 'Cadet-Boxer-PLP1.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 534
  // },
  // {
  //   categoryId: 2,
  //   colors: [
  //     {
  //       colorId: 6,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 7,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Cadet-CardCase-Back-PLP.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 111
  // },
  // {
  //   categoryId: 0,
  //   colors: [
  //     {
  //       colorId: 6,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 8,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Cadet-GT-PLP2.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 111
  // },
  // {
  //   categoryId: 2,
  //   colors: [
  //     {
  //       colorId: 6,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 9,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'cadet-passkeeper-plp1.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 0,
  //   colors: [
  //     {
  //       colorId: 1,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 6,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 10,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Cadet-Stowaway-PLP.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 2,
  //   colors: [
  //     {
  //       colorId: 1,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 6,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 11,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Cadet-Wash-Kit-PLP.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 0,
  //   colors: [
  //     {
  //       colorId: 6,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 12,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Cadet-Weekender-PLP2.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 0,
  //   colors: [
  //     {
  //       colorId: 0,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 13,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Domino_PLP.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 2,
  //   colors: [
  //     {
  //       colorId: 1,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 0,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 14,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Domino-Angle-PLP.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 2,
  //   colors: [
  //     {
  //       colorId: 1,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 0,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 15,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Domino-dropdown-menu.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 2,
  //   colors: [
  //     {
  //       colorId: 1,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 0,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 16,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Domino-Grand-Tour-Front_Strap-v3.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 4,
  //   colors: [
  //     {
  //       colorId: 0,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 17,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Domino-Medium_Zip_Top_Pouch_v2.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 2,
  //   colors: [
  //     {
  //       colorId: 0,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 18,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'domino-passkeeper-plp1.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 4,
  //   colors: [
  //     {
  //       colorId: 1,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 0,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 19,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Domino-Small_zZip_Top_Pouch.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 3,
  //   colors: [
  //     {
  //       colorId: 0,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 20,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'duffel_blue.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 3,
  //   colors: [
  //     {
  //       colorId: 4,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 1,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 21,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'duffel_tan.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 2,
  //   colors: [
  //     {
  //       colorId: 8,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 22,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Jetty-CardCase-Back-PLP1.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 4,
  //   colors: [
  //     {
  //       colorId: 1,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 8,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 23,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Jetty-Large-Zip_Top_Pouch.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 0,
  //   colors: [
  //     {
  //       colorId: 8,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 24,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Jetty-Weekender-Front-PDP-v2.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 2,
  //   colors: [
  //     {
  //       colorId: 8,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 25,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Mallard-Angle-PLP.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 2,
  //   colors: [
  //     {
  //       colorId: 1,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 8,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 26,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Mallard-CardCase-Back-PLP.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 0,
  //   colors: [
  //     {
  //       colorId: 9,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 27,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Mallard-dropdown-menu.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 4,
  //   colors: [
  //     {
  //       colorId: 8,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 28,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Mallard-Large-Zip_Top_Pouch.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 0,
  //   colors: [
  //     {
  //       colorId: 4,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 7,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 29,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Scout-Weekender-Front-PDP-v2.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
  // {
  //   categoryId: 0,
  //   colors: [
  //     {
  //       colorId: 5,
  //       isAvailable: true,
  //       isBestSeller: true,
  //       isPersonalize: true
  //     },
  //     {
  //       colorId: 3,
  //       isAvailable: false,
  //       isPersonalize: false,
  //       preoderDate: '03/15/18'
  //     },
  //     {
  //       colorId: 4,
  //       isAvailable: false,
  //     },
  //   ],
  //   description: 'some description33',
  //   id: 30,
  //   isBestSeller: false,
  //   isNew: false,
  //   image: 'Cadet-Stowaway-PLP.png',
  //   label: 'Label fbdrb',
  //   name: 'product',
  //   price: 166
  // },
]