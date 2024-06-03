ServerEvents.recipes(e => {  

    e.remove({id:'ars_nouveau:imbuement_lapis'})
    e.remove({id:'ars_nouveau:imbuement_amethyst'})
    e.remove({id:'ars_nouveau:imbuement_amethyst_block'})

    e.remove({id:'ars_nouveau:novice_spell_book'})
    e.remove({id:'ars_nouveau:imbuement_chamber'})
    e.remove({id:'ars_nouveau:arcane_core'})
    e.remove({id:'ars_nouveau:arcane_pedestal'})
    e.remove({id:'ars_nouveau:relay'})
    e.remove({id:'ars_nouveau:scribes_table'})
    e.remove({id:'ars_nouveau:agronomic_sourcelink'})
    e.remove({id:'ars_nouveau:volcanic_sourcelink'})
    e.remove({id:'ars_nouveau:alchemical_sourcelink'})
    e.remove({id:'ars_nouveau:vitalic_sourcelink'})
    e.remove({id:'ars_nouveau:mycelial_sourcelink'})

    e.recipes.create.compacting(Fluid.of('kubejs:sourceberry_juice', 100), 'ars_nouveau:sourceberry_bush')
    e.recipes.create.mixing(Fluid.of('kubejs:gilding_slush', 200), [Fluid.of('kubejs:sourceberry_juice', 100), 'minecraft:gold_ingot'])
    e.recipes.create.filling('kubejs:gilded_amethyst', ['minecraft:amethyst_block', Fluid.of('kubejs:gilding_slush', 100)])

    e.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": "kubejs:gilded_amethyst"
        },
        "output": "kubejs:dripping_source_gem",
        "pedestalItems": [],
        "source": 500
    })

    e.recipes.create.emptying(['ars_nouveau:source_gem', Fluid.of('kubejs:condensed_essence', 250)], 'kubejs:dripping_source_gem')

    e.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": "minecraft:gold_ingot"
        },
        "output": "kubejs:ornate_gold",
        "pedestalItems": [
            {
                "item": {
                    "item": "minecraft:gold_nugget"
                }
            },
            {
                "item": {
                    "item": "minecraft:gold_nugget"
                }
            },
            {
                "item": {
                    "item": "minecraft:gold_nugget"
                }
            }
        ],
        "source": 250
    })

    e.shapeless('ars_nouveau:novice_spell_book', ['minecraft:enchanted_book', 'kubejs:ornate_gold', 'kubejs:ornate_gold', 'minecraft:stone_shovel', 'minecraft:stone_pickaxe', 'minecraft:stone_axe', 'minecraft:stone_sword'])

    e.shaped('ars_nouveau:imbuement_chamber', [
		'AGA', 
		'A A',
        'MTM'  
	], {
		A: 'ars_nouveau:archwood_planks',
        M: 'minecraft:amethyst_block',
        T: 'supplementaries:gold_trapdoor',
        G: 'minecraft:gold_ingot'
	}).id('ico:imbuement_chamber')

    e.recipes.create.compacting('16x ars_nouveau:sourcestone', ['ars_nouveau:source_gem', '16x #forge:stone'])

    e.shaped('ars_nouveau:arcane_core', [
		'GTG', 
		'ASA',
        'GTG'  
	], {
		A: 'ars_nouveau:archwood_planks',
        S: 'ars_nouveau:source_gem',
        T: 'ars_nouveau:sourcestone',
        G: 'kubejs:ornate_gold'
	}).id('ico:arcane_core')

    e.shaped('ars_nouveau:enchanting_apparatus', [
		'TST', 
		'GDG',
        'TST'  
	], {
		D: 'minecraft:diamond',
        S: 'ars_nouveau:source_gem',
        T: 'ars_nouveau:sourcestone',
        G: 'kubejs:ornate_gold'
	}).id('ico:enchanting_apparatus')

    e.shaped('ars_nouveau:arcane_pedestal', [
		'TST', 
		'GTG',
        'GTG'  
	], {
        S: 'ars_nouveau:source_gem',
        T: 'ars_nouveau:sourcestone',
        G: 'kubejs:ornate_gold'
	}).id('ico:arcane_pedestal')

    e.shaped('ars_nouveau:relay', [
		'G G', 
		'GSG',
        'G G'
	], {
        S: 'ars_nouveau:source_gem_block',
        G: 'kubejs:ornate_gold'
	}).id('ico:relay')

    e.shaped('ars_nouveau:scribes_table', [
		'AAA', 
		'GSG',
        'L L'
	], {
        A: 'ars_nouveau:archwood_planks',
        L: '#forge:logs/archwood',
        S: 'ars_nouveau:source_gem',
        G: 'kubejs:ornate_gold'
	}).id('ico:scribes_table')

    e.shaped('ars_nouveau:agronomic_sourcelink', [
		' S ', 
		'GXG',
        'TST'
	], {
        S: 'ars_nouveau:source_gem',
        G: 'kubejs:ornate_gold',
        T: 'ars_nouveau:sourcestone',
        X: 'create:sweet_roll'
	}).id('ico:agronomic_sourcelink')

    e.shaped('ars_nouveau:volcanic_sourcelink', [
		' S ', 
		'GXG',
        'TST'
	], {
        S: 'ars_nouveau:source_gem',
        G: 'kubejs:ornate_gold',
        T: 'ars_nouveau:sourcestone',
        X: 'create:blaze_cake'
	}).id('ico:volcanic_sourcelink')

    e.shaped('ars_nouveau:alchemical_sourcelink', [
		' S ', 
		'GXG',
        'TST'
	], {
        S: 'ars_nouveau:source_gem',
        G: 'kubejs:ornate_gold',
        T: 'ars_nouveau:sourcestone',
        X: 'minecraft:brewing_stand'
	}).id('ico:alchemical_sourcelink')

    e.shaped('ars_nouveau:vitalic_sourcelink', [
		' S ', 
		'GXG',
        'TST'
	], {
        S: 'ars_nouveau:source_gem',
        G: 'kubejs:ornate_gold',
        T: 'ars_nouveau:sourcestone',
        X: 'minecraft:glistering_melon_slice'
	}).id('ico:vitalic_sourcelink')

    e.shaped('ars_nouveau:mycelial_sourcelink', [
		' S ', 
		'GXG',
        'TST'
	], {
        S: 'ars_nouveau:source_gem',
        G: 'kubejs:ornate_gold',
        T: 'ars_nouveau:sourcestone',
        X: 'minecraft:mushroom_stew'
	}).id('ico:mycelial_sourcelink')
})