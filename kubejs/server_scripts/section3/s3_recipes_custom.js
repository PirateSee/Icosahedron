ServerEvents.recipes(e => {
	/*e.custom({
	  "type": "create:sequenced_assembly",
	  "ingredient": {
		"tag": "forge:plates/gold"
	  },
	  "transitionalItem": {
		"item": "create:incomplete_precision_mechanism"
	  },
	  "sequence": [
		{
		  "type": "create:splashing",
		  "ingredients": [
			{
			  "item": "create:incomplete_precision_mechanism"
			},
			{
			  "fluid": "minecraft:water",
			  "nbt": {},
			  "amount": 150
			}
		  ],
		  "results": [
			{
			  "item": "create:incomplete_precision_mechanism"
			}
		  ]
		},
		{
		  "type": "vintageimprovements:polishing",
		  "speed_limits": 1,
		  "ingredients": [
			{
			  "item": "create:incomplete_precision_mechanism"
			},
		  ],
		  "results": [
			{
			  "item": "create:incomplete_precision_mechanism"
			}
		  ]
		},
		{
		  "type": "create:cutting",
		  "ingredients": [
			{
			  "item": "create:incomplete_precision_mechanism"
			}
		  ],
		  "results": [
			{
			  "item": "create:incomplete_precision_mechanism"
			}
		  ],
		  "processingTime": 100
		}
	  ],
	  "results": [
		{
		  "item": "create:precision_mechanism",
		  "chance": 120.0
		},
		{
		  "item": "create:golden_sheet",
		  "chance": 8.0
		}
	  ],
	  "loops": 5
	})*/
	
	e.shaped('kubejs:brass_framing', [
		'AIT', 
		'IA '  
	], {
		I: 'create:andesite_alloy',
		A: 'create:brass_sheet',
		T: '#ico:tool/hammer'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:brass_framing')

	let inter = 'kubejs:incomplete_logic_circuit'
	e.recipes.create.sequenced_assembly([
		Item.of('2x kubejs:logic_circuit').withChance(90.0),
		Item.of('create:crafter_slot_cover').withChance(2.0),
		Item.of('create:brass_ingot').withChance(4.0),
		Item.of('create:brass_funnel').withChance(4.0)
	], 'create:brass_sheet', [
		e.recipes.createDeploying(inter, [inter, 'create:electron_tube']),
		e.recipes.createDeploying(inter, [inter, 'kubejs:redstone_cable']),
		e.recipes.createDeploying(inter, [inter, 'minecraft:gold_nugget']),
        e.recipes.createDeploying(inter, [inter, 'kubejs:redstone_cable']),
	]).transitionalItem(inter).loops(2)

	e.recipes.create.mixing(Fluid.of('kubejs:blaze_icing', 400), [Fluid.of('lava', 250), Fluid.of('create:honey', 50), 'minecraft:sugar']).heated()

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
			"item": "createaddition:copper_wire"
		},
		{
			"item": "createaddition:gold_wire"
		}
	],
		"results": [
		{
			"item": "kubejs:redstone_cable",
			"count": 1
		}
	],
	"processingTime": 200	
	})

	e.recipes.create.mixing(Fluid.of('kubejs:molten_glass', 300), ['minecraft:quartz', '4x immersive_weathering:vitrified_sand']).heated()
	e.recipes.create.compacting('kubejs:quartz_glass', Fluid.of('kubejs:molten_glass', 100))
	e.blasting('kubejs:tempered_glass', 'kubejs:quartz_glass')

	e.shaped('kubejs:brass_filter_framing', [
		'IT', 
		'SA'  
	], {
		A: 'kubejs:brass_framing', 
		S: 'kubejs:treated_wood_planks',
		I: 'create:brass_sheet',
		T: '#ico:tool/saw'
	}).damageIngredient(Item.of('#ico:tool/saw')).id('ico:brass_filter_framing')

	e.shaped('kubejs:unfinished_brass_filter', [
		'SAS'  
	], {
		A: 'kubejs:brass_filter_framing', 
		S: 'createaddition:brass_rod'
	}).id('ico:incomplete_brass_filter')

	e.recipes.create.mixing(Fluid.of('kubejs:sulfur', 500), ['kubejs:sulfur', Fluid.of('minecraft:water', 500)]).heated().id('ico:aq_sulfur')
	e.recipes.create.mixing('3x minecraft:gunpowder', ['2x kubejs:sulfur', 'kubejs:coal_powder', 'minecraft:sugar']).id('ico:gunpowder_from_crude_sulfur')
	e.recipes.create.compacting('kubejs:sulfur', '2x minecraft:gunpowder').id('ico:sulfur_from_gunpowder')

	e.recipes.create.mixing('2x minecraft:corase_dirt', ['minecraft:dirt', 'minecraft:gravel'])

	e.custom({
		"type": "createsifter:sifting",
		"ingredients": [
			{
			"item": "createsifter:brass_mesh"
			},
			{
			"item": 'minecraft:gravel'
			}
		],
		"results": [
			{
			"item": "kubejs:soft_slag_dust",
			"chance": 0.1
			},
			{
			"item": "minecraft:flint",
			"chance": 0.3
			},
			{
			"item": "minecraft:iron_nugget",
			"chance": 0.15
			}
		],
		"processingTime": 320,
		"minimumSpeed": 128.0
	})

	e.custom({
		"type": "createsifter:sifting",
		"ingredients": [
			{
			"item": "createsifter:brass_mesh"
			},
			{
			"item": 'minecraft:coarse_dirt'
			}
		],
		"results": [
			{
			"item": "kubejs:sulfur",
			"chance": 0.03
			},
			{
			"item": "minecraft:flint",
			"chance": 0.08
			},
			{
			"item": "minecraft:iron_nugget",
			"chance": 0.06
			},
			{
			"item": "minecraft:wheat_seeds",
			"chance": 0.1
			},
			{
			"item": "minecraft:bone_meal",
			"chance": 0.08
			}
		],
		"processingTime": 240,
		"minimumSpeed": 64.0
	})

	e.custom({
		"type": "createsifter:sifting",
		"ingredients": [
			{
			"item": "createsifter:brass_mesh"
			},
			{
			"item": 'kubejs:coal_powder'
			}
		],
		"results": [
			{
			"item": 'kubejs:sulfur',
			"chance": 0.5
			},
			{
			"item": "kubejs:soft_slag_dust",
			"chance": 0.1
			},
			{
			"item": 'immersive_weathering:soot',
			"chance": 0.5
			}
		],
		"processingTime": 200,
		"minimumSpeed": 64.0
	})

	e.recipes.create.filling('kubejs:lcd_display', ['#forge:glass_panes', Fluid.of('estrogen:molten_amethyst', 50)])

	//advanced tools
	e.shaped('kubejs:advanced_screwdriver', [
		'RT', 
		'I ',
		'H '  
	], {
		I: 'kubejs:carbon_steel_ingot',
		R: 'kubejs:carbon_steel_rod',
		H: 'kubejs:tool_handle',
		T: '#ico:tool/saw'
	}).damageIngredient(Item.of('#ico:tool/saw')).id('ico:advanced_screwdriver')

	e.shaped('kubejs:advanced_file', [
		'ST', 
		'I ',
		'H '  
	], {
		I: 'kubejs:carbon_steel_ingot',
		S: 'kubejs:carbon_steel_sheet',
		H: 'kubejs:tool_handle',
		T: '#ico:tool/saw'
	}).damageIngredient(Item.of('#ico:tool/saw')).id('ico:advanced_file')

	e.shaped('kubejs:advanced_hammer', [
		' ST', 
		' RS',
		'H  '  
	], {
		S: 'kubejs:carbon_steel_sheet',
		R: 'kubejs:carbon_steel_rod',
		H: 'kubejs:tool_handle',
		T: '#ico:tool/saw'
	}).damageIngredient(Item.of('#ico:tool/saw')).id('ico:advanced_hammer')

	e.shaped('kubejs:advanced_saw', [
		'  H', 
		'SRT',
		'R  '  
	], {
		S: 'kubejs:carbon_steel_sheet',
		R: 'kubejs:carbon_steel_rod',
		H: 'kubejs:tool_handle',
		T: '#ico:tool/saw'
	}).damageIngredient(Item.of('#ico:tool/saw')).id('ico:advanced_saw')

	e.shapeless('kubejs:advanced_multitool', ['kubejs:advanced_screwdriver', 'kubejs:advanced_hammer', 'kubejs:advanced_file', 'kubejs:advanced_saw', 'create:polished_rose_quartz']).id('ico:tool_advanced_multitool')

	e.recipes.create.filling('7x kubejs:sealant', [Fluid.of('kubejs:coal_tar', 50), 'minecraft:iron_nugget'])

    e.shaped('kubejs:compressed_iron_drill', [
		'iIi',
		'IGI', 
		'GAG'  
	], {
		I: 'kubejs:high_pressure_plate',
		i: 'create:brass_nugget',
		G: 'pneumaticcraft:ingot_iron_compressed',
		A: 'create:andesite_alloy'
	}).id('ico:compressed_iron_drill')

    e.shaped('kubejs:netherite_drill', [
		'iIi',
		'IGI', 
		'GAG'  
	], {
		I: 'kubejs:tungsten_ingot',
		i: 'mekanism:reinforced_alloy',
		G: 'minecraft:diamond',
		A: 'minecraft:netherite_ingot'
	}).id('ico:netherite_drill')
})