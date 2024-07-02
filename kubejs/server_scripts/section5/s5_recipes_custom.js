ServerEvents.recipes(e => {
    e.shaped('kubejs:dragon_sinew_mesh', [
		'W',
		'F'
	], {
		F: 'kubejs:brass_filter_framing',
		W: 'tetra:dragon_sinew'
	}).id('ico:dragon_sinew_mesh')

	e.recipes.create.crushing('createsifter:crushed_end_stone', 'minecraft:end_stone')

	e.custom({
		"type": "createsifter:sifting",
		"ingredients": [
			{
				"item": "kubejs:dragon_sinew_mesh"
			},
			{
				"item": 'createsifter:crushed_end_stone'
			}
			],
			"results": [
			{
				"item": 'minecraft:glowstone_dust',
				"chance": 0.02
			},
			{
				"item": 'mekanism:dust_osmium',
				"chance": 0.05
			}
		],
		"processingTime": 900,
		"minimumSpeed": 128.0
	})

	e.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": {
                "tag": "forge:ingots/nickel"
            }
        },
        "output": {
            "amount": 10,
            "infuse_type": "kubejs:nickel"
        }
    }).id('ico:nickel_from_ingot')

	/*e.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": {
                "tag": "forge:dusts/copper"
            }
        },
        "output": {
            "amount": 10,
            "infuse_type": "kubejs:copper"
        }
    }).id('ico:copper_from_dust')*/

	e.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": {
                'item': "kubejs:cupronickel_wire"
            }
        },
        "output": {
            "amount": 10,
            "infuse_type": "kubejs:cupronickel"
        }
    }).id('ico:cupronickel_from_wire')

	e.custom({
		"type": "mekanism:metallurgic_infusing",
		"chemicalInput": {
			"amount": 40,
			"infuse_type": "kubejs:nickel"
		},
		"itemInput": {
			"ingredient": {
				"item": "minecraft:copper_ingot",
				"count": 2
			}
		},
		"output": {
			"count": 1,
			"item": "kubejs:cupronickel_ingot"
		}
	}).id('cuppronickel_from_copper')

	/*e.custom({
		"type": "mekanism:metallurgic_infusing",
		"chemicalInput": {
			"amount": 80,
			"infuse_type": "kubejs:copper"
		},
		"itemInput": {
			"ingredient": {
				"item": "create:zinc_ingot"
			}
		},
		"output": {
			"count": 1,
			"item": "create:brass_ingot"
		}
	}).id('infused_brass')*/

	e.custom({
		"type":"createaddition:rolling",
		"input": {
			  "item": "kubejs:cupronickel_ingot"
		},
		"result": {
			"item": "kubejs:cupronickel_rod",
			"count": 2
		}
	})

	e.recipes.create.pressing('kubejs:cupronickel_sheet', 'kubejs:cupronickel_ingot')

	e.custom({
		"type":"createaddition:rolling",
		"input": {
			  "item": "kubejs:cupronickel_sheet"
		},
		"result": {
			"item": "kubejs:cupronickel_wire",
			"count": 2
		}
	})

	e.shaped('kubejs:steel_framing', [
		'AIT', 
		'IA '  
	], {
		I: 'kubejs:carbon_steel_rod',
		A: 'mekanism:ingot_steel',
		T: '#ico:tool/hammer'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:steel_framing')

	e.recipes.create.deploying('kubejs:uninfused_basic_circuit', ['pneumaticcraft:printed_circuit_board', 'mekanism:ingot_osmium'])

	e.custom({
		"type": "pneumaticcraft:pressure_chamber",
		"inputs": [
			{
				"type": "pneumaticcraft:stacked_item",
				"item": "mekanism:basic_control_circuit",
				"count": 2
			},
			{
				"type": "pneumaticcraft:stacked_item",
				"item": "mekanism:alloy_infused",
				"count": 4
			}
		],
		"pressure": 3,
		"results": [
			{
		  	"item": "kubejs:uninfused_advanced_circuit"
			}
		]
	})

	e.custom({
		"type": "pneumaticcraft:pressure_chamber",
		"inputs": [
			{
				"item": "mekanism:advanced_control_circuit",
			},
			{
				"type": "pneumaticcraft:stacked_item",
				"item": "mekanism:alloy_reinforced",
				"count": 4
			}
		],
		"pressure": 3,
		"results": [
			{
		  	"item": "kubejs:uninfused_elite_circuit"
			}
		]
	})

	e.custom({
		"type": "pneumaticcraft:pressure_chamber",
		"inputs": [
			{
				"item": "mekanism:elite_control_circuit",
			},
			{
				"type": "pneumaticcraft:stacked_item",
				"item": "mekanism:alloy_atomic",
				"count": 2
			}
		],
		"pressure": 3,
		"results": [
			{
		  	"item": "kubejs:uninfused_ultimate_circuit"
			}
		]
	})

	let inter = 'kubejs:incomplete_machine_plating'
	e.recipes.createSequencedAssembly([
		Item.of('kubejs:machine_plating').withChance(16.0)
	], 'kubejs:compressed_framing', [
		e.recipes.createDeploying(inter, [inter, 'mekanism:ingot_osmium']),
		e.recipes.createDeploying(inter, [inter, 'mekanism:ingot_osmium']),
        e.recipes.createPressing(inter, inter),
		e.recipes.createDeploying(inter, [inter, 'kubejs:rubber']),
		e.recipes.createFilling(inter, [inter, Fluid.of('kubejs:molten_aluminum', 180)])
	]).transitionalItem(inter).loops(2)

	e.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": {
                "item": "create:sturdy_sheet"
            }
        },
        "output": {
            "count": 1,
            "item": "kubejs:sturdy_sheet_dust"
        }
    })

	e.recipes.create.compacting('kubejs:andesite_pressure_alloy', ['3x create:andesite_alloy', Fluid.of('kubejs:molten_pressure_alloy', 100)]).superheated()

	e.custom({
		"type": "mekanism:metallurgic_infusing",
		"chemicalInput": {
			"amount": 80,
			"infuse_type": "mekanism:diamond"
		},
		"itemInput": {
			"ingredient": {
				"item": "mekanism:alloy_infused",
				"count": 2
			}
		},
		"output": {
			"count": 1,
			"item": "kubejs:diamond_plated_alloy"
		}
	}).id('diamond_plated_alloy')

    inter = 'kubejs:incomplete_lithium_ion_cell'
	e.recipes.create.sequenced_assembly([
		Item.of('kubejs:lithium_ion_cell').withChance(16.0)
	], 'kubejs:steel_framing', [
		e.recipes.createDeploying(inter, [inter, 'mekanism:ingot_osmium']),
        e.recipes.createDeploying(inter, [inter, 'mekanism:dust_lithium']),
		e.recipes.createDeploying(inter, [inter, 'kubejs:cupronickel_sheet']),
        e.recipes.createDeploying(inter, [inter, 'create:golden_sheet']),
        e.recipes.createPressing(inter, inter),
	]).transitionalItem(inter).loops(2)
})