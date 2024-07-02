ServerEvents.recipes(e => {
    //alternate or more efficent methods of creating existing items

    //components

    let inter = 'kubejs:incomplete_electron_tube'
	e.recipes.create.sequenced_assembly([
		Item.of('create:electron_tube').withChance(16.0)
	], 'create:iron_sheet', [
		e.recipes.createDeploying(inter, [inter, 'create:copper_sheet']),
        e.recipes.createPressing(inter, inter),
		e.recipes.createDeploying(inter, [inter, '#forge:wires/all_metal']),
		e.recipes.createDeploying(inter, [inter, 'create:polished_rose_quartz']),
        e.recipes.createDeploying(inter, [inter, 'kubejs:aquatrine']),
	]).transitionalItem(inter).loops(1)

	e.recipes.createDeploying('kubejs:wooden_slide', ['#minecraft:planks', 'create:iron_sheet'])

	e.custom({
	"type": "pneumaticcraft:pressure_chamber",
	"inputs": [
		{
		"item": "kubejs:pressure_alloy"
		}
	],
	"pressure": 1.0,
	"results": [
		{
		"item": "pneumaticcraft:ingot_iron_compressed"
		}
	]
	})

	e.custom({
	"type": "pneumaticcraft:pressure_chamber",
	"inputs": [
		{
		"item": "minecraft:quartz"
		},
		{
		"type": "pneumaticcraft:stacked_item",
		"item": "minecraft:redstone",
		"count": 7
		}
	],
	"pressure": -0.5,
	"results": [
		{
		"item": "create:polished_rose_quartz"
		}
	]
	})

	/*inter = 'kubejs:incomplete_electron_tube'
	e.recipes.create.sequenced_assembly([
		Item.of('8x pneumaticcraft:pressure_tube').withChance(16.0)
	], 'kubejs:high_pressure_plate', [
		e.recipes.createDeploying(inter, [inter, 'kubejs:tempered_glass']),
		e.recipes.createDeploying(inter, [inter, 'kubejs:high_pressure_plate']),
		e.recipes.createPressing(inter, inter),
	]).transitionalItem(inter).loops(1)*/

	//kinetics

	let inter1 = 'kubejs:incomplete_fluid_pipe'
	e.recipes.create.sequenced_assembly([
		Item.of('6x create:fluid_pipe').withChance(16.0)
	], 'minecraft:copper_ingot', [
		e.recipes.createDeploying(inter1, [inter1, 'create:copper_sheet']),
        e.recipes.createPressing(inter1, inter1),
		e.recipes.createDeploying(inter1, [inter1, 'create:copper_sheet']),
		e.recipes.createDeploying(inter1, [inter1, 'kubejs:sealant'])
	]).transitionalItem(inter1).loops(2)

	e.recipes.createDeploying('create:mechanical_pump', ['create:fluid_pipe', 'create:cogwheel'])

    e.recipes.create.cutting('4x create:mechanical_belt', 'kubejs:rubber')

	e.custom({
		"type":"vintageimprovements:vacuumizing",
		"ingredients": [
			{
				"item": "minecraft:redstone"
			},
			{
				"item": "minecraft:redstone"
			},
			{
				"item": "createaddition:electrum_wire"
			}
		],
			"results": [
			{
				"item": "kubejs:redstone_cable",
				"count": 1
			}
		],
		"processingTime": 150	
	})

	e.custom({
		"type": "pneumaticcraft:pressure_chamber",
		"inputs": [
			{
			"item": "kubejs:compressed_iron_sheet"
			}
		],
		"pressure": 2.0,
		"results": [
			{
			"item": "kubejs:high_pressure_plate"
			}
		]
    })

	e.recipes.createMixing('16x kubejs:sealant', ['minecraft:slime_ball', {fluidTag: 'forge:plantoil', amount: 300}]).heated()

	//copper corroding

	let corrosion = (normal, prefix, suffix) => {
		e.recipes.create.filling( prefix + 'exposed' + suffix, [normal, Fluid.of('pneumaticcraft:etching_acid', 10)]).id(normal + '_corroding')
		e.recipes.create.filling(prefix + 'weathered' + suffix, [prefix + 'exposed' + suffix, Fluid.of('pneumaticcraft:etching_acid', 10)]).id(prefix + 'exposed' + suffix + '_corroding')
		e.recipes.create.filling(prefix + 'oxidized' + suffix, [prefix + 'weathered' + suffix, Fluid.of('pneumaticcraft:etching_acid', 10)]).id(prefix + 'weathered' + suffix + '_corroding')
	}

	/*e.recipes.create.filling('minecraft:exposed_copper', ['minecraft:copper_block', Fluid.of('pneumaticcraft:etching_acid', 10)])
	e.recipes.create.filling('minecraft:weathered_copper', ['minecraft:exposed_copper', Fluid.of('pneumaticcraft:etching_acid', 10)])
	e.recipes.create.filling('minecraft:oxidized_copper', ['minecraft:weathered_copper', Fluid.of('pneumaticcraft:etching_acid', 10)])*/
	corrosion('minecraft:copper_block', 'minecraft:', '_copper')
	corrosion('minecraft:cut_copper', 'minecraft:', '_cut_copper')
	corrosion('minecraft:cut_copper_stairs', 'minecraft:', '_cut_copper_stairs')
	corrosion('minecraft:cut_copper_slab', 'minecraft:', '_cut_copper_slab')

	corrosion('create:copper_shingles', 'create:', '_copper_shingles')
	corrosion('create:copper_shingle_stairs', 'create:', '_copper_shingle_stairs')
	corrosion('create:copper_shingle_slab', 'create:', '_copper_shingle_slab')
	corrosion('create:copper_tiles', 'create:', '_copper_tiles')
	corrosion('create:copper_tile_stairs', 'create:', '_copper_tile_stairs')
	corrosion('create:copper_tile_slab', 'create:', '_copper_tile_slab')

	corrosion('twigs:copper_pillar', 'twigs:', '_copper_pillar')

	//extruder
	e.custom({
		"type": "create_mechanical_extruder:extruding",
		"ingredients": [
			{
			"item": "create:mechanical_saw"
			},
			{
			"tag": "minecraft:logss"
			}
		],
		"catalyst": {
			"item": "kubejs:treated_wood_planks"
		},
		"result": {
			"item": "minecraft:oak_log"
		}
	})

	e.custom({
		"type": "create_mechanical_extruder:extruding",
		"ingredients": [
			{
			"fluid": "create:chocolate"
			},
			{
			"fluid": "minecraft:lava"
			}
		],
		"result": {
			"item": "create:scoria"
		}
	})

	e.custom({
		"type": "create_mechanical_extruder:extruding",
		"ingredients": [
			{
			"fluid": "create:honey"
			},
			{
			"fluid": "minecraft:lava"
			}
		],
		"result": {
			"item": "create:limestone"
		}
	})

	//transmutation

	//catalyized
	e.recipes.create.mixing([Item.of('kubejs:transmutation_catalyst').withChance(0.99), 'immersive_weathering:sand_layer_block'], ['kubejs:transmutation_catalyst', 'immersive_weathering:red_sand_layer_block'])
	e.recipes.create.mixing([Item.of('kubejs:transmutation_catalyst').withChance(0.99), 'immersive_weathering:red_sand_layer_block'], ['kubejs:transmutation_catalyst', 'immersive_weathering:sand_layer_block'])

	e.recipes.create.compacting([Item.of('kubejs:transmutation_catalyst').withChance(0.99), '6x create:limestone'], ['kubejs:transmutation_catalyst', '6x quark:limestone'])
	e.recipes.create.compacting([Item.of('kubejs:transmutation_catalyst').withChance(0.99), '6x quark:limestone'], ['kubejs:transmutation_catalyst', '6x create:limestone'])

	e.recipes.create.compacting([Item.of('kubejs:transmutation_catalyst').withChance(0.99), '6x quark:jasper'], ['kubejs:transmutation_catalyst', '6x minecraft:terracotta'])
	e.recipes.create.compacting([Item.of('kubejs:transmutation_catalyst').withChance(0.99), '6x quark:shale'], ['kubejs:transmutation_catalyst', '6x minecraft:blackstone'])

	e.recipes.create.compacting([Item.of('kubejs:transmutation_catalyst').withChance(0.99), '6x immersive_weathering:silt'], ['kubejs:transmutation_catalyst', '6x twigs:silt'])
	e.recipes.create.compacting([Item.of('kubejs:transmutation_catalyst').withChance(0.99), '6x twigs:silt'], ['kubejs:transmutation_catalyst', '6x immersive_weathering:silt'])

	//chip

	//synthetic
	e.shaped('minecraft:sponge', [ 
        'PS',
        'SS'
        ], {
          P: 'kubejs:polystyrene',
          S: 'kubejs:sealant'
    }).id('ico:sponge')

    e.shaped('16x minecraft:arrow', [ 
      'FFF',
      'SSS',
      ' R '
      ], {
        R: 'kubejs:rubber',
        S: 'minecraft:stick',
        F: 'minecraft:flint'
    }).id('ico:arrow')

	//other

	e.recipes.create.deploying('minecraft:spectral_arrow', ['minecraft:arrow', 'minecraft:glowstone_dust'])
	e.recipes.create.deploying('quark:torch_arrow', ['minecraft:arrow', 'minecraft:torch'])
})