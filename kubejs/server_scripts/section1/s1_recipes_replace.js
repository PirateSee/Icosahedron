ServerEvents.recipes(e => {
	//removal
	
	//andesite alloy
	e.remove({id:'create:crafting/materials/andesite_alloy'})
	e.remove({id:'create:crafting/materials/andesite_alloy_from_zinc'})
	e.remove({id:'create:mixing/andesite_alloy'})
	e.remove({id:'create:mixing/andesite_alloy_from_zinc'})
	//recipes
	
	//andesite alloy
	e.shaped('kubejs:andesite_alloy_dust', [
		'IA', 
		'AI'
	], {
		A: 'minecraft:andesite',
		I: '#ico:andesite_alloyable'
	}).id('ico:andesite_alloy_dust')
	
	e.custom({
		"type": "create:mixing",
		"ingredients": [
			{
			  "item": "minecraft:andesite"
			},
			{
			  "item": '#ico:andesite_alloyable'
			}
		],
		"results": [
			{
			  "item": "create:andesite_alloy",
			  "count": 1
			}
		],
		"heatRequirement": "lowheated"
	})
	
	e.recipes.createMixing('kubejs:andesite_alloy_dust', ['minecraft:andesite', '#ico:andesite_alloyable'])
	
	e.smelting('create:andesite_alloy', 'kubejs:andesite_alloy_dust')
	e.blasting('create:andesite_alloy', 'kubejs:andesite_alloy_dust')
})