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
    })

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
    })

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
    })

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
        "count": 4,
    },
    "pressure": 4.0,
    "speed": 0.1,
    "temperature": {
        "min_temp": 473
        }
    })

    e.recipes.create.mixing('64x minecraft:brick', ['kubejs:plasticizer', '4x minecraft:clay'])
    e.recipes.create.mixing('24x minecraft:white_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/white'])

    e.recipes.create.mixing('minecraft:blue_ice', [Fluid.of('minecraft:water', 500), Fluid.of('kubejs:ethylene', 50)])
    e.recipes.create.mixing('minecraft:packed_ice', [Fluid.of('minecraft:water', 500), Fluid.of('kubejs:ethylene', 10)])

    e.custom({
        "type": "pneumaticcraft:thermo_plant",
        "fluid_input": {
            "type": "pneumaticcraft:fluid",
            "amount": 100,
            "fluid": "pneumaticcraft:gasoline"
        },
        "fluid_output": {
            "type": "pneumaticcraft:fluid",
            "amount": 100,
            "fluid": "kubejs:styrene"
        },
        "pressure": 4.0,
        "speed": 0.5,
        "temperature": {
            "min_temp": 473
        }
    })

    e.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "item_output": {
          "item": "kubejs:rubber"
        },
        "input1": {
          "type": "pneumaticcraft:fluid",
          "amount": 1000,
          "fluid": "kubejs:styrene"
        },
        "input2": {
          "type": "pneumaticcraft:fluid",
          "amount": 500,
          "fluid": 'kubejs:coal_tar'
        },
        "pressure": 3.5,
        "time": 400
    })

    e.recipes.create.compacting('kubejs:polystyrene', [Fluid.of('kubejs:styrene', 500), {fluidTag: 'forge:plantoil', amount: 200}]).heated()

    e.recipes.create.compacting('32x kubejs:sealant', 'kubejs:rubber').heated()

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
    })

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
      "energy": 2000,
      "maxChargeRate": 200
    })
})