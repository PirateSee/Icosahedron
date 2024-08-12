ServerEvents.recipes(e => {

    //e.recipes.create.pressing('kubejs:compressed_iron_sheet', 'pneumaticcraft:ingot_iron_compressed')
    e.custom({
        "type": "vintageimprovements:hammering",
        "hammerBlows": 1,
        "ingredients": [
          {
            "item": "pneumaticcraft:ingot_iron_compressed"
          }
        ],
        "results": [
          {
            "item": "kubejs:compressed_iron_sheet"
          }
        ]
    }).id("ico:compressed_iron_sheet")

    e.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
        {
        "item": "kubejs:compressed_iron_sheet"
        },
        {
            "item": "kubejs:carbon_steel_rod"
        }
    ],
    "pressure": 2.0,
    "results": [
        {
        "item": "kubejs:high_pressure_plate"
        }
    ]
    }).id("ico:high_pressure_plate")

    e.shaped('kubejs:compressed_framing', [
		'AIT', 
		'IA '  
	], {
		I: 'create:andesite_alloy',
		A: 'kubejs:compressed_iron_sheet',
		T: '#ico:tool/hammer'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:compressed_framing')

    //ball bearing recipe

    e.custom({
    "type": "pneumaticcraft:thermo_plant",
    "air_use_multiplier": 1.5,
    "exothermic": false,
    "fluid_input": {
        "type": "pneumaticcraft:fluid",
        "amount": 1000,
        "tag": "forge:lubricant"
    },
    "item_input": {
        "item": "kubejs:carbon_steel_ingot"
    },
    "item_output": {
        "item": "kubejs:lubricated_bearing"
    },
    "pressure": 3.0,
    "speed": 0.2,
    "temperature": {
        "min_temp": 473
      }
    }).id("ico:lubricated_bearing")

    //plastic

    e.custom({
    "type": "pneumaticcraft:thermo_plant",

    "fluid_input": {
        "type": "pneumaticcraft:fluid",
        "amount": 500,
        "fluid": "kubejs:sulfur"
    },
    "item_input": {
        "item": "kubejs:nickel_ingot"
    },
    "item_output": {
        "item": "kubejs:plasticizer",
        "count": 8,
    },
    "pressure": 4.0,
    "speed": 0.1,
    "temperature": {
        "min_temp": 473
        }
    }).id("ico:plasticizer")

    e.recipes.create.mixing('32 minecraft:brick', ['kubejs:plasticizer', '4x minecraft:clay']).id("ico:plasticizer_brick")
    e.recipes.create.mixing('24x minecraft:white_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/white']).id("ico:plasticizer_white_concrete")
    e.recipes.create.mixing('24x minecraft:light_gray_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/light_gray']).id("ico:plasticizer_light_gray_concrete")
    e.recipes.create.mixing('24x minecraft:gray_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/gray']).id("ico:plasticizer_gray_concrete")
    e.recipes.create.mixing('24x minecraft:black_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/black']).id("ico:plasticizer_black_concrete")
    e.recipes.create.mixing('24x minecraft:brown_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/brown']).id("ico:plasticizer_brown_concrete")
    e.recipes.create.mixing('24x minecraft:red_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/red']).id("ico:plasticizer_red_concrete")
    e.recipes.create.mixing('24x minecraft:orange_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/orange']).id("ico:plasticizer_orange_concrete")
    e.recipes.create.mixing('24x minecraft:yellow_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/yellow']).id("ico:plasticizer_yellow_concrete")
    e.recipes.create.mixing('24x minecraft:lime_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/lime']).id("ico:plasticizer_lime_concrete")
    e.recipes.create.mixing('24x minecraft:green_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/green']).id("ico:plasticizer_green_concrete")
    e.recipes.create.mixing('24x minecraft:cyan_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/cyan']).id("ico:plasticizer_cyan_concrete")
    e.recipes.create.mixing('24x minecraft:light_blue_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/light_blue']).id("ico:plasticizer_light_blue_concrete")
    e.recipes.create.mixing('24x minecraft:blue_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/blue']).id("ico:plasticizer_blue_concrete")
    e.recipes.create.mixing('24x minecraft:purple_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/purple']).id("ico:plasticizer_purple_concrete")
    e.recipes.create.mixing('24x minecraft:magenta_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/magenta']).id("ico:plasticizer_magenta_concrete")
    e.recipes.create.mixing('24x minecraft:pink_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/pink']).id("ico:plasticizer_pink_concrete")

    e.recipes.create.mixing('minecraft:blue_ice', [Fluid.of('minecraft:water', 500), Fluid.of('mekanism:ethene', 50)]).id("ico:ethylene_blue_ice")
    e.recipes.create.mixing('minecraft:packed_ice', [Fluid.of('minecraft:water', 500), Fluid.of('mekanism:ethene', 10)]).id("ico:ethylene_packed_ice")
    e.recipes.create.mixing('minecraft:ice', [Fluid.of('minecraft:water', 250), Fluid.of('mekanism:ethene', 1)]).id("ico:ethylene_ice")

    e.custom({
        "type": "pneumaticcraft:thermo_plant",
        "fluid_input": {
            "type": "pneumaticcraft:fluid",
            "amount": 100,
            "fluid": "pneumaticcraft:gasoline"
        },
        "fluid_output": {
            "type": "pneumaticcraft:fluid",
            "amount": 25,
            "fluid": "kubejs:styrene"
        },
        "pressure": 4.0,
        "speed": 0.5,
        "temperature": {
            "min_temp": 473
        }
    }).id("ico:styrene")

    e.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "item_output": {
          "item": "kubejs:rubber"
        },
        "input1": {
          "type": "pneumaticcraft:fluid",
          "amount": 750,
          "fluid": "kubejs:styrene"
        },
        "input2": {
          "type": "pneumaticcraft:fluid",
          "amount": 900,
          "fluid": 'kubejs:coal_tar'
        },
        "pressure": 3.5,
        "time": 400
    }).id("ico:rubber")

    e.recipes.create.compacting('kubejs:polystyrene', [Fluid.of('kubejs:styrene', 250), {fluidTag: 'forge:plantoil', amount: 250}]).heated().id("ico:polystyrene")

    e.recipes.create.compacting('32x kubejs:sealant', 'kubejs:rubber').heated().id("ico:rubber_sealant")

    e.recipes.create.mechanical_crafting('kubejs:laser_emitter', [
      'RRGUL',
      'PPW  '
    ], {
          P: 'pneumaticcraft:plastic',
          L: 'botania:lens_normal',
          R: 'minecraft:redstone_lamp',
          U: 'kubejs:rubber',
          G: 'kubejs:tempered_glass',
          W: 'createaddition:copper_spool'
    }).id("ico:laser_emitter")

    e.custom({
        "type":"createaddition:charging",
        "input": {
            "item": "kubejs:pressed_iron",
            "count": 1
        },
        "result": {
            "item": "kubejs:magnetized_iron",
            "count": 1
        },
        "energy": 10000,
        "maxChargeRate": 500
    }).id("ico:magnetized_iron")

    
})