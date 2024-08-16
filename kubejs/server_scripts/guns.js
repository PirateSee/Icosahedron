ServerEvents.recipes(e => {

    e.remove({id: 'scguns:gun_bench'})
    e.remove({id: 'scguns:macerator'})
    e.remove({id: 'scguns:powered_macerator'})

    e.remove({id: 'scguns:mechanical_press'})
    e.remove({id: 'scguns:powered_mechanical_press'})

    e.remove({id: 'scguns:gun_grip'})
    e.remove({id: 'scguns:gun_magazine'})
    e.remove({id: 'scguns:stone_gun_barrel'})
    e.remove({id: 'scguns:gun_barrel'})
    e.remove({id: 'scguns:heavy_gun_barrel'})

    //e.remove({id: /scguns:[copper|iron|treated_brass|diamond_steel|scorched]_gun_frame/})

    e.remove({id: 'scguns:mech_press/gun_parts'})
    e.remove({id: 'scguns:powered_mech_press/gun_parts'})

    e.remove({id: 'scguns:mech_press/heavy_gun_parts'})
    e.remove({id: 'scguns:powered_mech_press/heavy_gun_parts'})

    e.remove({id: 'scguns:macerator/treated_brass_blend_from_macerating'})
    e.remove({id: 'scguns:macerator/treated_brass_blend_from_brass_mask_from_macerating'})
    e.remove({id: 'scguns:powered_macerator/treated_brass_blend_from_macerating'})
    e.remove({id: 'scguns:powered_macerator/treated_brass_blend_from_brass_mask_from_macerating'})
    e.remove({id: 'scguns:create/treated_brass_blend_from_mixing'})

    e.remove({id: 'scguns:plasma'})

    e.remove({id: 'create:mechanical_crafting/potato_cannon'})

    //obliterate
    e.remove({id: 'scguns:polar_generator'})
    e.remove({id: 'scguns:anthralite/anthralite_pickaxe_smithing'})
    e.remove({id: 'scguns:anthralite/anthralite_axe_smithing'})
    e.remove({id: 'scguns:anthralite/anthralite_shovel_smithing'})
    e.remove({id: 'scguns:anthralite/anthralite_hoe_smithing'})
    e.remove({id: 'scguns:anthralite/anthralite_sword_smithing'})
    e.remove({id: 'scguns:anthralite/anthralite_knife_smithing'})

    e.remove({id: 'scguns:enchanted_bandage'})
    e.remove({id: 'scguns:dragon_salve'})

    //sulfur
    e.recipes.create.milling(Item.of('kubejs:sulfur').withChance(0.6), 'vintageimprovements:sulfur_chunk')
    e.recipes.create.compacting('scguns:sulfur_chunk', '3x kubejs:sulfur')
    
    e.shaped('scguns:gun_bench', [
        '  T',
        'NNN',
        'WCW'
    ], {
        W: '#minecraft:planks',
        N: 'scguns:anthralite_ingot',
        C: 'minecraft:crafting_table',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:gun_bench')

    e.shaped('scguns:macerator', [
        '  T',
        'AMA',
        'CBC'
    ], {
        B: 'minecraft:blast_furnace',
        C: 'kubejs:carbon_steel_ingot',
        M: 'create:millstone',
        A: 'create:andesite_alloy_block',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:macerator')

    e.shaped('scguns:powered_macerator', [
        'WT',
        'M '
    ], {
        M: 'scguns:macerator',
        W: 'createaddition:copper_wire',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:powered_macerator')

    e.shaped('scguns:mechanical_press', [
        '  T',
        'PMP',
        'ACA'
    ], {
        B: 'minecraft:blast_furnace',
        C: 'kubejs:wrought_iron_block',
        M: 'create:mechanical_press',
        A: 'create:andesite_alloy_block',
        P: 'kubejs:pig_iron_ingot',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:stamping_press')

    e.shaped('scguns:powered_mechanical_press', [
        'WT',
        'M '
    ], {
        M: 'scguns:stamping_press',
        W: 'createaddition:copper_wire',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:powered_stamping_press')

    e.shaped('scguns:gun_grip', [
        'WNT',
        'WL '
    ], {
        W: '#minecraft:planks',
        N: 'scguns:anthralite_nugget',
        L: 'minecraft:leather',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:gun_grip')

    e.shaped('scguns:gun_magazine', [
        'AST',
        'II ',
        'AA '
    ], {
        A: 'scguns:anthralite_ingot',
        I: 'kubejs:wrought_iron_ingot',
        S: 'kubejs:wrought_iron_sheet',
        T: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:gun_magazine')

    e.shaped('scguns:stone_gun_barrel', [
        ' TA',
        ' AS',
        'AS '
    ], {
        A: 'create:andesite_alloy',
        S: 'minecraft:smooth_stone',
        T: '#ico:tool/file'
    }).damageIngredient(Item.of('#ico:tool/file')).id('ico:stone_gun_barrel')

    e.shaped('scguns:gun_barrel', [
        ' TS',
        ' SR',
        'SR '
    ], {
        S: 'scguns:anthralite_ingot',
        R: 'kubejs:carbon_steel_rod',
        T: '#ico:tool/file'
    }).damageIngredient(Item.of('#ico:tool/file')).id('ico:gun_barrel')

    e.shaped('scguns:heavy_gun_barrel', [
        ' TS',
        'RSS',
        'SR '
    ], {
        S: 'scguns:anthralite_ingot',
        R: 'kubejs:carbon_steel_sheet',
        T: '#ico:tool/file'
    }).damageIngredient(Item.of('#ico:tool/file')).id('ico:heavy_gun_barrel')

    let gun_frame = (output,ingot) => {
        e.shaped(output, [
            ' IT',
            'IGI',
            'III'
        ], {
            I: ingot,
            G: 'create_connected:six_way_gearbox',
            T: '#ico:tool/screwdriver'
        }).damageIngredient(Item.of('#ico:tool/screwdriver')).id(output)
    }

    gun_frame('scguns:copper_gun_frame', 'minecraft:copper_ingot')
    gun_frame('scguns:iron_gun_frame', 'kubejs:wrought_iron_ingot')
    gun_frame('scguns:treated_brass_gun_frame', 'scguns:treated_brass_ingot')
    gun_frame('scguns:diamond_steel_gun_frame', 'scguns:diamond_steel_ingot')
    gun_frame('scguns:scorched_gun_frame', 'scguns:scorched_ingot')

    e.custom({
        "type": "scguns:mechanical_pressing",
        "processingTime": 300,
        "ingredients": [
            {
                "item": "kubejs:wrought_iron_block"
            },
            {
                "item": "create:cogwheel",
                "count": 2
            }
        ],
        "mold": {
            "item": "scguns:gun_parts_mold"
        },
        "result": {
            "item": "scguns:gun_parts",
            "count": 1
        }
    }).id('ico:gun_parts')

    e.custom({
        "type": "scguns:powered_mechanical_pressing",
        "processingTime": 100,
        "energyUse": 500,
        "ingredients": [
            {
                "item": "kubejs:wrought_iron_block"
            },
            {
                "item": "create:cogwheel",
                "count": 2
            }
        ],
        "mold": {
            "item": "scguns:gun_parts_mold"
        },
        "result": {
            "item": "scguns:gun_parts",
            "count": 1
        }
    }).id('ico:gun_parts_powered')

    e.custom({
        "type": "scguns:mechanical_pressing",
        "processingTime": 300,
        "ingredients": [
            {
                "item": "scguns:anthralite_block"
            },
            {
                "item": "create:large_cogwheel",
                "count": 2
            }
        ],
        "mold": {
            "item": "scguns:gun_parts_mold"
        },
        "result": {
            "item": "scguns:heavy_gun_parts",
            "count": 1
        }
    }).id('ico:heavy_gun_parts')

    e.custom({
        "type": "scguns:powered_mechanical_pressing",
        "processingTime": 100,
        "energyUse": 500,
        "ingredients": [
            {
                "item": "scguns:anthralite_block"
            },
            {
                "item": "create:large_cogwheel",
                "count": 2
            }
        ],
        "mold": {
            "item": "scguns:gun_parts_mold"
        },
        "result": {
            "item": "scguns:heavy_gun_parts",
            "count": 1
        }
    }).id('ico:heavy_gun_parts_powered')

    e.custom({
        "type": "scguns:lightning_battery",
        "processingTime": 50,
        "requiredEnergy": 6400,
        "ingredients": [
            {
                "item": "aether:ambrosium_shard"
            }
        ],
        "result": {
            "count": 1,
            "item": "scguns:plasma"
        }
    })

    e.shaped('create:potato_cannon', [
        'AGP',
        'CC '
    ], {
        A: 'create:andesite_alloy',
        G: ''
    })

    e.recipes.create.mixing('3x scguns:treated_brass_blend', ['create:brass_ingot', 'pneumaticcraft:ingot_iron_compressed', 'minecraft:blaze_powder', 'minecraft:quartz']).superheated().id('ico:treated_brass_blend')
    e.recipes.create.crushing('scguns:treated_brass_blend', 'scguns:brass_mask').id('ico:treated_brass_from_mask')

    e.shapeless('scguns:pebbles', '2x twigs:pebble')
    e.shapeless('2x twigs:pebble', 'scguns:pebbles')

    e.recipes.create.compacting('create:brass_ingot', 'scguns:ancient_brass').heated()
})