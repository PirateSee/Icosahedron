ServerEvents.recipes(e => {

    //duping

    //crude
    /*e.custom({
        "type": "mekanism:purifying",
        "chemicalInput": {
            "amount": 1,
            "gas": "mekanism:oxygen"
        },
        "itemInput": {
            "ingredient": {
                "tag": "kubejs:impure_iron_grit"
            }
        },
        "output": {
            "count": 1,
            "item": "mekanism:clump_iron"
        }
    })   

    //advanced
    e.custom({
        "type": "mekanism:injecting",
        "chemicalInput": {
            "amount": 1,
            "gas": "mekanism:hydrogen_chloride"
        },
        "itemInput": {
            "ingredient": {
                "tag": "forge:ores/iron"
            }
        },
            "output": {
            "count": 4,
            "item": "mekanism:shard_iron"
        }
    })*/

    //tungsten
    e.custom({
        "type": "mekanism:dissolution",
        "gasInput": {
            "amount": 1,
            "gas": "mekanism:sulfuric_acid"
        },
        "itemInput": {
            "ingredient": {
                "item": "kubejs:wolframite_ore"
            }
        },
        "output": {
          "amount": 200,
            "chemicalType": "slurry",
            "slurry": "kubejs:dirty_tungsten"
        }
    })
    e.custom({
        "type": "mekanism:washing",
        "fluidInput": {
            "amount": 5,
            "tag": "minecraft:water"
        },
        "output": {
            "amount": 1,
            "slurry": "kubejs:clean_tungsten"
        },
        "slurryInput": {
            "amount": 1,
            "slurry": "kubejs:dirty_tungsten"
        }
    })
    e.custom({
        "type": "mekanism:crystallizing",
        "chemicalType": "slurry",
        "input": {
            "amount": 200,
            "slurry": 'kubejs:clean_tungsten'
        },
        "output": {
            "item": "kubejs:tungsten_crystal"
        }
    })
    e.custom({
        "type": "mekanism:injecting",
        "chemicalInput": {
            "amount": 1,
            "gas": "mekanism:hydrogen_chloride"
        },
        "itemInput": {
            "ingredient": {
                "item": "kubejs:tungsten_crystal"
            }
        },
            "output": {
            "count": 1,
            "item": "kubejs:tungsten_shard"
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
                "item": "kubejs:tungsten_shard"
            }
        },
        "output": {
            "count": 1,
            "item": "kubejs:tungsten_clump"
        }
    })
    e.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": {
                "item": "kubejs:tungsten_clump"
            }
        },
        "output": {
            "count": 1,
            "item": "kubejs:tungsten_dirty_dust"
        }
    })
    e.custom({
        "type": "mekanism:enriching",
        "input": {
            "ingredient": {
                "item": "kubejs:tungsten_dirty_dust"
            }
        },
        "output": {
            "count": 1,
            "item": "kubejs:tungsten_dust"
        }
    })

    e.blasting('kubejs:tungsten_ingot', 'kubejs:tungsten_dust')
})