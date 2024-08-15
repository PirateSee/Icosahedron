ServerEvents.recipes(e => {

    //tungsten
    e.custom({
        "type": "mekanism:injecting",
        "chemicalInput": {
            "amount": 1,
            "gas": "mekanism:hydrogen_chloride"
        },
        "itemInput": {
            "ingredient": {
                "item": "kubejs:wolframite_ore"
            }
        },
            "output": {
            "count": 1,
            "item": "kubejs:wolframite_shard"
        }
    })
    e.custom({
        "type": "mekanism:purifying",
        "chemicalInput": {
            "amount": 1,
            "gas": "mekanism:oxygen"
        },
        "itemInput": {
            "ingredient": {
                "item": "kubejs:wolframite_shard"
            }
        },
        "output": {
            "count": 1,
            "item": "kubejs:wolframite_clump"
        }
    })
    e.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": {
                "item": "kubejs:wolframite_clump"
            }
        },
        "output": {
            "count": 1,
            "item": "kubejs:wolframite_powder"
        }
    })

    e.custom({
        "type":"vintageimprovements:centrifugation",
        "ingredients": [ 
            {
                "item": 'kubejs:wolframite_powder',
            }
        ],
        "results": [
            {
                "item": "kubejs:small_iron_grit",
                "amount": 3
            },
            {
                "item": "kubejs:tungsten_dust"
            },
            {
                "item": "minecraft:quartz",
                "chance": 0.25
            },
            {
                "fluid": "kubejs:slag_runoff",
                "amount": 150
            }
        ],
        "processingTime": 2000
    }).id('ico:decomposing_wolframite')

    //uranium
    e.custom({
        "type": "mekanism:injecting",
        "chemicalInput": {
            "amount": 1,
            "gas": "mekanism:hydrogen_chloride"
        },
        "itemInput": {
            "ingredient": {
                "item": "kubejs:uraninite_ore"
            }
        },
            "output": {
            "count": 1,
            "item": "kubejs:uraninite_shard"
        }
    })
    e.custom({
        "type": "mekanism:purifying",
        "chemicalInput": {
            "amount": 1,
            "gas": "mekanism:oxygen"
        },
        "itemInput": {
            "ingredient": {
                "item": "kubejs:uraninite_shard"
            }
        },
        "output": {
            "count": 1,
            "item": "kubejs:uraninite_clump"
        }
    })
    e.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": {
                "item": "kubejs:uraninite_clump"
            }
        },
        "output": {
            "count": 1,
            "item": "kubejs:uraninite_powder"
        }
    })

    e.custom({
        "type":"vintageimprovements:centrifugation",
        "ingredients": [ 
            {
                "item": 'kubejs:uraninite_powder',
            }
        ],
        "results": [
            {
                "item": "kubejs:small_zinc_grit"
            },
            {
                "item": "mekanism:dust_lead",
                "chance": 0.75
            },
            {
                "item": "mekanism:raw_uranium",
                "chance": 0.4
            },
            {
                "fluid": "kubejs:slag_runoff",
                "amount": 200
            }
        ],
        "processingTime": 2000
    }).id('ico:decomposing_uraninite')

    
    e.blasting('kubejs:tungsten_ingot', 'kubejs:tungsten_dust')

    //e.recipes.create.crushing(Item.of('mekanism:dirty_dust_tin').withChance(0.05), 'minecraft:granite')

    e.remove({id: 'betterend:amber_gem'})
    e.custom({
        "type": "mekanism:purifying",
        "chemicalInput": {
            "amount": 1,
            "gas": "mekanism:oxygen"
        },
        "itemInput": {
            "ingredient": {
                "count": 4,
                "item": "betterend:raw_amber"
            }
        },
        "output": {
            "count": 1,
            "item": "betterend:amber_gem"
        }
    })
})