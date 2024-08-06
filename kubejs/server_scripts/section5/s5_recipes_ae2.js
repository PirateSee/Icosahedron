ServerEvents.recipes(e => {

    //base resources
    e.remove({id: 'ae2:transform/fluix_crystals'})
    e.remove({id: 'create:compat/ae2/mixing/fluix_crystal'})
    e.remove({id: 'ae2:smelting/silicon_from_certus_quartz_dust'})
    e.remove({id: 'ae2:blasting/silicon_from_certus_quartz_dust'})

    //blocks
    e.remove({id: 'ae2:network/parts/quartz_fiber'})
    e.remove({id: 'ae2:network/cables/glass_fluix'})
    e.remove({id: 'ae2:network/blocks/crank'})
    e.remove({id: 'ae2:network/blocks/storage_drive'})
    e.remove({id: 'ae2:network/blocks/inscribers'})
    e.remove({id: 'ae2:network/blocks/controller'})

    //base resources
    e.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "minecraft:water"
        },
        "ingredients": [
            {
                "item": "ae2:charged_certus_quartz_crystal"
            },
            {
                "item": "betterend:crystal_shards"
            },
            {
                "item": "botania:quartz_mana"
            }
        ],
        "result": {
            "count": 2,
            "item": "ae2:fluix_crystal"
        }
    }).id('ico:fluix_crstals_transform')

    e.recipes.create.mixing('2x ae2:fluix_crystal', ['ae2:charged_certus_quartz_crystal', 'betterend:crystal_shards', 'botania:quartz_mana', Fluid.of('water', 1000)]).id('ico:fluix_crstals_mix')
    
    e.recipes.create.mixing('ae2:silicon', ['ae2:certus_quartz_dust', 'ae2:sky_dust']).heated().id('ico:silicon')

    //blocks

    //wire
    let inter = 'kubejs:incomplete_electrolytic_core'
	e.recipes.create.sequenced_assembly([
		Item.of('2x ae2:quartz_fiber').withChance(16.0)
	], 'ae2:certus_quartz_dust', [
		e.recipes.createDeploying(inter, [inter, 'kubejs:tempered_glass']),
        e.recipes.createDeploying(inter, [inter, 'minecraft:quartz']),
		e.recipes.createPressing(inter,inter),
	]).transitionalItem(inter).loops(2).id("ico:quartz_fiber")

    e.recipes.createDeploying('ae2:fluix_glass_cable', ['ae2:quartz_fiber', 'ae2:fluix_crystal'])

    e.recipes.createDeploying('ae2:fluix_covered_cable', ['ae2:fluix_glass_cable', '#minecraft:wool'])

    e.shaped('ae2:drive', [
		' ET',
		'FEF',
        'USU'
	], {
        E: 'ae2:engineering_processor',
		F: 'ae2:fluix_glass_cable',
		U: 'kubejs:tungsten_ingot',
        S: 'mekanism:steel_casing',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:drive')

    e.shaped('ae2:inscriber', [
		'SUS',
		'FLT',
        'SUS'
	], {
		F: 'ae2:fluix_crystal',
		U: 'kubejs:tungsten_ingot',
        S: 'mekanism:ingot_steel',
        L: 'kubejs:laser_emitter',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:inscriber')

    

    //alternate
    e.recipes.create.mixing('2x ae2:sky_dust', ['ae2:sky_dust', '6x betterend:violecite']).id('ico:sky_stone_violecite')
    e.recipes.create.mixing('2x ae2:sky_dust', ['ae2:sky_dust', '6x betterend:umbralith']).id('ico:sky_stone_umbralith')

    e.recipes.create.milling('4x betterend:crystal_shards', 'betterend:aurora_crystal').id('ico:aurora_crystal_milling')
})