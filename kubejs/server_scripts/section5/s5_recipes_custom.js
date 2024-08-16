ServerEvents.recipes(e => {
    e.shaped('kubejs:dragon_sinew_mesh', [
		'W',
		'F'
	], {
		F: 'kubejs:brass_filter_framing',
		W: 'tetra:dragon_sinew'
	}).id('ico:dragon_sinew_mesh')

	e.custom({
		"type": "createsifter:sifting",
		"ingredients": [
			{
				"item": "kubejs:dragon_sinew_mesh"
			},
			{
				"item": 'betterend:endstone_dust'
			}
			],
			"results": [
			{
				"item": 'minecraft:glowstone_dust',
				"chance": 0.02
			},
			{
				"item": 'mekanism:dust_osmium',
				"chance": 0.15
			}
		],
		"processingTime": 900,
		"minimumSpeed": 128.0
	}).id("sift_crushed_end_stone")

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
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": {
                'item': "kubejs:cupronickel_ingot"
            }
        },
        "output": {
            "amount": 20,
            "infuse_type": "kubejs:cupronickel"
        }
    }).id('ico:cupronickel_from_ingot')

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

	e.custom({
		"type":"createaddition:rolling",
		"input": {
			  "item": "kubejs:cupronickel_ingot"
		},
		"result": {
			"item": "kubejs:cupronickel_rod",
			"count": 2
		}
	}).id("cupronickel_rod")

	e.recipes.create.pressing('kubejs:cupronickel_sheet', 'kubejs:cupronickel_ingot').id("cupronickel_sheet")

	e.custom({
		"type":"createaddition:rolling",
		"input": {
			  "item": "kubejs:cupronickel_sheet"
		},
		"result": {
			"item": "kubejs:cupronickel_wire",
			"count": 2
		}
	}).id("cupronickel_wire")

	e.shaped('kubejs:steel_framing', [
		'AIT', 
		'IA '  
	], {
		I: 'kubejs:carbon_steel_rod',
		A: 'mekanism:ingot_steel',
		T: '#ico:tool/hammer'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:steel_framing')

	e.recipes.create.deploying('kubejs:uninfused_basic_circuit', ['pneumaticcraft:printed_circuit_board', 'mekanism:ingot_osmium']).id("ico:uninfused_basic_circuit")

    e.recipes.create.deploying('kubejs:uninfused_advanced_circuit', ['pneumaticcraft:printed_circuit_board', 'mekanism:alloy_infused']).id("ico:uninfused_advanced_circuit")

    e.recipes.create.deploying('kubejs:uninfused_elite_circuit', ['pneumaticcraft:printed_circuit_board', 'mekanism:alloy_reinforced']).id("ico:uninfused_elite_circuit")

    e.recipes.create.deploying('kubejs:uninfused_ultimate_circuit', ['pneumaticcraft:printed_circuit_board', 'mekanism:alloy_atomic']).id("ico:uninfused_ultimate_circuit")

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
            "count": 2,
            "item": "kubejs:sturdy_sheet_dust"
        }
    }).id("ico:sturdy_sheet_dust")

	e.recipes.create.compacting('kubejs:andesite_pressure_alloy', ['2x create:andesite_alloy', Fluid.of('kubejs:molten_pressure_alloy', 100)]).superheated().id("andesite_pressure_alloy")

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
	}).id('ico:diamond_plated_alloy')

    inter = 'kubejs:incomplete_lithium_ion_cell'
	e.recipes.create.sequenced_assembly([
		Item.of('kubejs:lithium_ion_cell').withChance(16.0)
	], 'kubejs:steel_framing', [
		e.recipes.createDeploying(inter, [inter, 'mekanism:ingot_osmium']),
        e.recipes.createDeploying(inter, [inter, 'mekanism:dust_lithium']),
		e.recipes.createDeploying(inter, [inter, 'kubejs:cupronickel_sheet']),
        e.recipes.createDeploying(inter, [inter, 'create:golden_sheet']),
        e.recipes.createPressing(inter, inter),
	]).transitionalItem(inter).loops(2).id("ico:lithium_ion_cell")

    e.custom({
		"type": "mekanism:metallurgic_infusing",
		"chemicalInput": {
			"amount": 40,
			"infuse_type": "mekanism:refined_obsidian"
		},
		"itemInput": {
			"ingredient": {
				"item": "kubejs:tungsten_ingot",
				"count": 1
			}
		},
		"output": {
			"count": 1,
			"item": "kubejs:refined_tungsten"
		}
	}).id('ico:refined_tungsten')
})