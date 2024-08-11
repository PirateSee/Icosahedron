ServerEvents.recipes(e => {
	//anything involving ores and alloys

	//ore processing
	e.remove({id:'create:mixing/brass_ingot'})
		
	//crude ore processing
	let crude_ore_processing = (input,dust,pdust,output) => {
		if (output != 'minecraft:iron_ingot') {
			e.remove([{ type: 'minecraft:smelting', output: output}, { type: 'minecraft:blasting', output: output }])
		}
		
		e.recipes.createMilling(dust,input)
		e.custom({
		"type": "createsifter:sifting",
		"ingredients": [
			{
			"item": "createsifter:andesite_mesh"
			},
			{
			"item": dust
			}
		],
		"results": [
			{
			    "item": pdust
			},
			{
                "item": "kubejs:soft_slag_dust",
                "chance": 0.15
			},
			{
				"item": 'create:experience_nugget',
				"chance": 0.2
			}
		],
		"processingTime": 300,
		"minimumSpeed": 64.0
		})
		e.blasting(output, pdust)
	}
	
	crude_ore_processing('minecraft:raw_copper','kubejs:impure_copper_grit','kubejs:copper_grit','minecraft:copper_ingot')
	crude_ore_processing('minecraft:raw_gold','kubejs:impure_gold_grit','kubejs:gold_grit','minecraft:gold_ingot')
	//crude_ore_processing('kubejs:limonite_ore','kubejs:impure_iron_grit','kubejs:iron_grit','minecraft:iron_ingot')

	e.remove([{ type: 'minecraft:smelting', output: 'create:zinc_ingot'}, { type: 'minecraft:blasting', output: 'create:zinc_ingot' }])
	e.recipes.createMilling(['kubejs:sphalerite_grit', Item.of('kubejs:sphalerite_grit').withChance(0.5)],'kubejs:sphalerite_ore')
	//e.recipes.createMilling('kubejs:impure_zinc_grit','create:raw_zinc')
	e.custom({
		"type": "createsifter:sifting",
		"ingredients": [
		{
			"item": "createsifter:andesite_mesh"
		},
		{
			"item": 'kubejs:sphalerite_grit'
		}
		],
		"results": [
		{
			"item": 'kubejs:small_zinc_grit',
			"count": 2
		},
		{
			"item": 'kubejs:small_zinc_grit',
			"chance": 0.75
		},
		{
			"item": 'kubejs:small_iron_grit',
			"count": 1
		},
		{
			"item": 'mna:vinteum_dust',
			"chance": 0.15
		},
		{
			"item": "kubejs:soft_slag_dust",
			"chance": 0.25
		}
		],
		"processingTime": 300,
		"minimumSpeed": 64.0
	})
	e.shapeless('kubejs:zinc_grit', '4x kubejs:small_zinc_grit')
	e.blasting('create:zinc_ingot', 'kubejs:zinc_grit')

	e.recipes.createMilling(['kubejs:impure_iron_grit', Item.of('kubejs:impure_iron_grit').withChance(0.5)],'kubejs:limonite_ore')
	//e.recipes.createMilling('kubejs:impure_zinc_grit','create:raw_zinc')
	e.custom({
		"type": "createsifter:sifting",
		"ingredients": [
		{
			"item": "createsifter:andesite_mesh"
		},
		{
			"item": 'kubejs:impure_iron_grit'
		}
		],
		"results": [
		{
			"item": 'kubejs:small_iron_grit',
			"count": 2
		},
		{
			"item": 'kubejs:small_iron_grit',
			"chance": 0.75
		},
		{
			"item": "kubejs:soft_slag_dust",
			"chance": 0.15
		}
		],
		"processingTime": 300,
		"minimumSpeed": 64.0
	})
	e.shapeless('kubejs:iron_grit', '4x kubejs:small_iron_grit')
	e.blasting('minecraft:iron_ingot', 'kubejs:iron_grit')
  
    e.shapeless('kubejs:copper_grit', '4x kubejs:small_copper_grit')

	//wrought iron
	
	/*e.recipes.melterMelting(Fluid.of('kubejs:molten_pig_iron', 180),"minecraft:iron_ingot").processingTime(800).minimumHeat(4)
	e.recipes.melterMelting(Fluid.of('kubejs:molten_pig_iron', 180),"kubejs:limonite_ore").processingTime(800).minimumHeat(4)
	e.recipes.melterMelting(Fluid.of('kubejs:molten_pig_iron', 360),'create_new_age:magnetite_block').processingTime(800).minimumHeat(4)*/

	e.custom({
		"type": "createbigcannons:melting",
		"ingredients": [
			{
				"item": "kubejs:limonite_ore"
			}
		],
		"results": [
			{
				"fluid": "kubejs:molten_pig_iron",
				"amount": 60
			}
		],
		"processingTime": 360,
		"heatRequirement": "lowheated"
	})
	e.custom({
		"type": "createbigcannons:melting",
		"ingredients": [
			{
				"item": "minecraft:iron_ingot"
			}
		],
		"results": [
			{
				"fluid": "kubejs:molten_pig_iron",
				"amount": 90
			}
		],
		"processingTime": 180,
		"heatRequirement": "lowheated"
	})
	e.custom({
		"type": "createbigcannons:melting",
		"ingredients": [
			{
				"item": "create_new_age:magnetite_block"
			}
		],
		"results": [
			{
				"fluid": "kubejs:molten_pig_iron",
				"amount": 180
			}
		],
		"processingTime": 720,
		"heatRequirement": "lowheated"
	})
	
	e.custom({
		"type": "create:mixing",
		"ingredients": [
			{
			  "fluid": "kubejs:molten_pig_iron",
			  "amount": 180
			},
		],
		"results": [
			{
			  "fluid": "kubejs:molten_wrought_iron",
			  "amount": 90
			},
			{
			  "item": "kubejs:soft_slag_dust",
			  "count": 1
			}
		],
		"heatRequirement": "lowheated"
	}).id('ico:molten_wrought_iron')
	
	let molding = (output,id) => {
		e.recipes.create.filling('kubejs:ingot_mold_with_'.concat(id), [Fluid.of('kubejs:molten_'.concat(id), 90), 'kubejs:ingot_mold']).id('ico:ingot_mold_with_'.concat(id))
		e.recipes.create.pressing([output, 'kubejs:ingot_mold'], 'kubejs:ingot_mold_with_'.concat(id)).id('ico:pop_'.concat(id, '_ingot_mold'))
	}
	
	molding('kubejs:wrought_iron_ingot','wrought_iron')
	molding('kubejs:pig_iron_ingot','pig_iron')
	
	//e.recipes.create.filling('kubejs:mold_with_wrought_iron', [Fluid.of('kubejs:molten_wrought_iron', 180), 'kubejs:ingot_mold']).id('ico:mold_with_wrought_iron')
	//e.recipes.create.filling('kubejs:mold_with_pig_iron', [Fluid.of('kubejs:molten_pig_iron', 180), 'kubejs:ingot_mold']).id('ico:mold_with_pig_iron')
	
	//e.recipes.create.pressing(['blocksyouneed_luna:wrought_iron_ingot', 'kubejs:ingot_mold'], 'kubejs:mold_with_wrought_iron').id('ico:pop_wrought_iron_mold')
	//e.recipes.create.pressing(['blocksyouneed_luna:pig_iron_ingot', 'kubejs:ingot_mold'], 'kubejs:mold_with_pig_iron').id('ico:pop_pig_iron_mold')
	
	e.recipes.create.pressing('kubejs:wrought_iron_sheet', 'kubejs:wrought_iron_ingot')

	e.recipes.createPressing('kubejs:wrought_iron_sheet', 'kubejs:wrought_iron_ingot')

	e.custom({
		"type":"vintageimprovements:coiling",
		"ingredients": [ {
		  "item": "kubejs:wrought_iron_rod"
		}
	  ],
		"results": [
			{
				"item": "kubejs:wrought_iron_spring"
			}
		],
	  "processingTime": 120,
	})

	e.custom({
		"type":"createaddition:rolling",
		"input": {
			  "item": "kubejs:wrought_iron_ingot"
		},
		"result": {
			"item": "kubejs:wrought_iron_rod",
			"count": 2
		}
	})

	//e.smelting('minecraft:iron_ingot', 'kubejs:pig_iron_ingot')

	//gem polishing
    //replace other gem-outputting recipes
    e.replaceOutput(
        { output: 'minecraft:emerald' }, // Arg 1: the filter
        'minecraft:emerald',            // Arg 2: the item to replace
        'kubejs:rough_emerald'         // Arg 3: the item to replace it with
    )
    e.replaceOutput(
        { output: 'minecraft:quartz' }, // Arg 1: the filter
        'minecraft:quartz',            // Arg 2: the item to replace
        'kubejs:rough_nether_quartz'         // Arg 3: the item to replace it with
    )

	e.recipes.create.sandpaper_polishing('minecraft:quartz', 'kubejs:rough_nether_quartz')
	e.recipes.create.sandpaper_polishing('minecraft:emerald', 'kubejs:rough_emerald')
    e.recipes.create.sandpaper_polishing('kubejs:aquatrine', 'kubejs:rough_aquatrine')
})