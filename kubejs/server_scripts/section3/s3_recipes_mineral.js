ServerEvents.recipes(e => {

    //advanced ore processing
    let advanced_ore = (ore, id, decompose, ingot) => {
        e.recipes.create.crushing(['kubejs:crushed_' + ore, Item.of('create:experience_nugget').withChance(0.5)], 'kubejs:' + ore + '_ore').id('ico:crushing_' + ore)

        //e.recipes.melterMelting(Fluid.of('kubejs:' + ore + '_slurry', 250), 'kubejs:crushed_' + ore).processingTime(1200).minimumHeat(10).id('ico:' + ore + '_melting')
        e.custom({
            "type": "createbigcannons:melting",
            "ingredients": [
                {
                    "item": 'kubejs:crushed_' + ore
                }
            ],
            "results": [
                {
                    "fluid": 'kubejs:' + ore + '_slurry',
                    "amount": 250
                }
            ],
            "processingTime": 360,
            "heatRequirement": "heated"
        })

        //e.recipes.create.mixing(decompose, Fluid.of('kubejs:' + ore + '_slurry', 250)).heated().id('ico:' + ore + '_seperating')

        e.custom({
        "type":"vintageimprovements:centrifugation",
        "ingredients": [ 
            {
                "fluid": 'kubejs:' + ore + '_slurry',
                "amount": 250
            }
        ],
        "results": decompose,
        "processingTime": 1000
        }).id('ico:decomposing_' + ore)

        //e.recipes.create.compacting(ingot, Fluid.of('kubejs:molten_' + id, 250)).id('ico:condensing_' + id + '_ore')

        e.recipes.create.filling('kubejs:ingot_mold_with_' + id, [Fluid.of('kubejs:molten_' + id, 90), 'kubejs:ingot_mold']).id('ico:ingot_mold_with_' + id)
            e.recipes.create.pressing([ingot, 'kubejs:ingot_mold'], 'kubejs:ingot_mold_with_' + id).id('ico:pop_' + id + '_ingot_mold')

        if(ingot != 'minecraft:iron_ingot') {
            //e.recipes.melterMelting(Fluid.of('kubejs:molten_' + id, 180), ingot)
            e.custom({
                "type": "createbigcannons:melting",
                "ingredients": [
                    {
                        "item": ingot
                    }
                ],
                "results": [
                    {
                        "fluid": 'kubejs:molten_' + id,
                        "amount": 90
                    }
                ],
                "processingTime": 180,
                "heatRequirement": "heated"
            })
        }
    }
    advanced_ore('pentlandite', 'nickel', [
            {
                "fluid": "kubejs:molten_nickel",
                "amount": 90
            },
            {
                "fluid": "kubejs:slag_runoff",
                "amount": 100
            }
        ], 'kubejs:nickel_ingot')
    advanced_ore('hematite', 'iron', [
            {
                "fluid": "kubejs:molten_iron",
                "amount": 60
            },
            {
                "fluid": "kubejs:slag_runoff",
                "amount": 100
            }
        ], 'minecraft:iron_ingot')
    advanced_ore('malachite', 'copper', [
            {
                "fluid": "kubejs:molten_copper",
                "amount": 80
            },
            {
                "fluid": "kubejs:slag_runoff",
                "amount": 100
            }
        ], 'minecraft:copper_ingot')
    advanced_ore('bauxite', 'aluminum', [
            {
                "fluid": "kubejs:molten_aluminum",
                "amount": 60
            },
            {
                "fluid": "kubejs:slag_runoff",
                "amount": 100
            }
        ], 'kubejs:aluminum_ingot')

    //gemstone polishing
    //replace other diamond-outputting recipes
    e.replaceOutput(
        { output: 'minecraft:diamond', not: {id: 'minecraft:diamond'} }, // Arg 1: the filter
        'minecraft:diamond',            // Arg 2: the item to replace
        'kubejs:unrefined_diamond'         // Arg 3: the item to replace it with
    )
    /*e.replaceOutput(
        { output: 'minecraft:amethyst_shard' }, // Arg 1: the filter
        'minecraft:amethyst_shard',            // Arg 2: the item to replace
        'kubejs:unrefined_amethyst'         // Arg 3: the item to replace it with
    )*/

    let gemstonePolishing = (id,output) => {
        e.recipes.create.splashing('kubejs:cleaned_unrefined_'.concat(id), 'kubejs:unrefined_'.concat(id)).id("ico:splashing_".concat(id))
        e.recipes.create.cutting('kubejs:unpolished_'.concat(id), 'kubejs:cleaned_unrefined_'.concat(id)).id("ico:cutting_".concat(id))
        e.custom({
            "type": "vintageimprovements:polishing",
            "speed_limits": 2,
            "ingredients": [
                {
                    "item": 'kubejs:unpolished_'.concat(id)
                },
            ],
            "results": [
                {
                    "item": output
                }
            ]
        }).id("ico:polishing_".concat(id))
    }
    
    gemstonePolishing('diamond', 'minecraft:diamond')
    //gemstonePolishing('amethyst', 'minecraft:amethyst')

    e.replaceInput(
        {id: 'create:milling/coal' }, // Arg 1: the filter
        'minecraft:coal',            // Arg 2: the item to replace
        'kubejs:coal_powder'         // Arg 3: the item to replace it with
    )
    e.remove({id:'create:milling/charcoal'})
    e.recipes.createMilling('kubejs:coal_powder', '#minecraft:coals')
    
    //alloying
    e.recipes.createMixing(
        [Fluid.of('kubejs:molten_brass', 180),Item.of('kubejs:slag').withChance(0.2)],
        ['2x minecraft:copper_ingot','create:zinc_ingot']).heated()

    e.recipes.create.filling('kubejs:ingot_mold_with_brass', [Fluid.of('kubejs:molten_brass', 180), 'kubejs:ingot_mold']).id('ico:ingot_mold_with_brass')
    e.recipes.create.pressing(['create:brass_ingot', 'kubejs:ingot_mold'], 'kubejs:ingot_mold_with_brass').id('ico:pop_brass_ingot_mold')

    e.recipes.create.mixing('kubejs:bronze_ingot', ['minecraft:copper_ingot','kubejs:tin_ingot'])

    e.recipes.create.mixing(Fluid.of('kubejs:molten_pressure_alloy', 400), ['1x kubejs:aluminum_ingot', '2x kubejs:pressed_iron']).superheated().id('ico:mix_molten_pressure_alloy')
    e.recipes.create.compacting(['kubejs:pressure_alloy', Fluid.of('kubejs:slag_runoff', 50)], [Fluid.of('kubejs:molten_pressure_alloy', 200), '#ico:corundum_clusters']).id('ico:compact_pressure_alloy')
    /*e.custom({
        "type":"vintageimprovements:pressurizing",
        "secondaryFluidResults": 0,
        "secondaryFluidInputs": 0,
        "heatRequirement": "superheated",
        "ingredients": [ 
        {
            "fluid": "kubejs:molten_pressure_alloy",
            "amount": 200
        },
        {
            "item": "kubejs:carbon_steel_rod"
        }
        ],
        "results": [
        {
            "fluid": "kubejs:slag_runoff",
            "amount": 50
        },
        {
            "item": 'kubejs:pressure_alloy'
        }
        ],
        "processingTime": 800
    })*/

        e.recipes.create.compacting('kubejs:double_iron', ['kubejs:wrought_iron_sheet', 'create:iron_sheet'])

        let inter = 'kubejs:unprosessed_pressed_iron'
        e.recipes.create.sequenced_assembly([
            Item.of('kubejs:pressed_iron').withChance(16.0)
        ], 'kubejs:double_iron', [
            e.recipes.createPressing(inter, inter),
        ]).transitionalItem(inter).loops(3)

    //carbon steel
    e.recipes.createMixing(['kubejs:coal_coke', Fluid.of('kubejs:coal_tar', 300)], '2x kubejs:coal_powder').heated()
    e.recipes.createMixing(['kubejs:hot_carbon_steel', Item.of('kubejs:slag').withChance(0.2)], ['kubejs:coal_coke', Fluid.of('kubejs:molten_pig_iron', 360)]).heated()

    //e.recipes.create.pressing('kubejs:hot_carbon_steel_sheet', 'kubejs:hot_carbon_steel')

    /*e.custom({
        "type": "vintageimprovements:hammering",
        "hammerBlows": 1,
        "ingredients": [
        {
            "item": "kubejs:hot_carbon_steel"
        }
        ],
        "results": [
        {
            "item": "kubejs:hot_carbon_steel_sheet"
        }
        ]
    })*/

    e.recipes.create.pressing('kubejs:hot_carbon_steel_sheet', 'kubejs:hot_carbon_steel').id('ico:hot_carbon_steel_sheet')

    e.custom({
            "type":"createaddition:rolling",
            "input": {
                "item": "kubejs:hot_carbon_steel"
            },
            "result": {
                "item": "kubejs:hot_carbon_steel_rod",
                "count": 2
            }
        })

    //re-melting
    e.custom({
        "type": "createbigcannons:melting",
        "ingredients": [
            {
                "item": 'kubejs:carbon_steel_ingot'
            }
        ],
        "results": [
            {
                "item": "kubejs:hot_carbon_steel"
            }
        ],
        "processingTime": 400,
        "heatRequirement": "heated"
    })

    e.custom({
        "type": "createbigcannons:melting",
        "ingredients": [
            {
                "item": 'kubejs:carbon_steel_sheet'
            }
        ],
        "results": [
            {
                "item": "kubejs:hot_carbon_steel"
            }
        ],
        "processingTime": 400,
        "heatRequirement": "heated"
    })

    e.custom({
        "type": "createbigcannons:melting",
        "ingredients": [
            {
                "item": 'kubejs:carbon_steel_rod',
                "count": 2
            }
        ],
        "results": [
            {
                "item": "kubejs:hot_carbon_steel"
            }
        ],
        "processingTime": 400,
        "heatRequirement": "heated"
    })

    //quenching
    e.recipes.create.filling('kubejs:carbon_steel_ingot', [Fluid.water(100), 'kubejs:hot_carbon_steel']).id('spout_quench_carbon_steel')
    e.recipes.create.filling('kubejs:carbon_steel_rod', [Fluid.water(100), 'kubejs:hot_carbon_steel_rod']).id('spout_quench_carbon_steel_rod')
    e.recipes.create.filling('kubejs:carbon_steel_sheet', [Fluid.water(100), 'kubejs:hot_carbon_steel_sheet']).id('spout_quench_carbon_steel_sheet')

    e.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "minecraft:water"
        },
        "ingredients": [
            {
                "item": "kubejs:hot_carbon_steel"
            }
        ],
        "result": {
            "count": 1,
            "item": "kubejs:carbon_steel_ingot"
        }
    }).id('drop_quench_carbon_steel')

    e.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "minecraft:water"
        },
        "ingredients": [
            {
                "item": "kubejs:hot_carbon_steel_rod"
            }
        ],
        "result": {
            "count": 1,
            "item": "kubejs:carbon_steel_rod"
        }
    }).id('drop_quench_carbon_steel_rod')

    e.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "minecraft:water"
        },
        "ingredients": [
            {
                "item": "kubejs:hot_carbon_steel_sheet"
            }
        ],
        "result": {
            "count": 1,
            "item": "kubejs:carbon_steel_sheet"
        }
    }).id('drop_quench_carbon_steel_sheet')

    e.recipes.create.sandpaper_polishing('minecraft:quartz', 'kubejs:rough_nether_quartz')
    e.recipes.create.sandpaper_polishing('minecraft:emerald', 'kubejs:rough_emerald')

    //nickel
    e.shapeless('9x kubejs:nickel_nugget', 'kubejs:nickel_ingot')
    e.shaped('kubejs:nickel_ingot', [
        'NNN', 
        'NNN', 
        'NNN'
    ], {
        N: 'kubejs:nickel_nugget'
    }).id('ico:compact_nickel_nugget')
})
