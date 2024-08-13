ServerEvents.recipes(e => {
    e.remove({type: 'create_new_age:energising'})
    //e.remove({id: 'create_new_age:energising/iron_ingot'})
    //e.remove({id: 'create_new_age:energising/iron_sheet'})
    e.remove({id: 'create_new_age:pressing/overcharged_iron'})

    //e.remove({id: 'create_new_age:energising/gold_ingot'})
    //e.remove({id: 'create_new_age:energising/golden_sheet'})
    e.remove({id: 'create_new_age:pressing/overcharged_gold'})

    e.remove({id: 'create_new_age:enchanted_golden_apple'})
    e.remove({id: 'create_new_age:reactor/reactor_casing'})
    e.remove({id: 'create_new_age:reactor/reactor_glass'})

    e.remove({id: 'create_new_age:shaped/layered_magnet'})
    e.remove({id: 'create_new_age:shaped/fluxuated_magnet'})

    //restore recipes
    e.custom({
        "type":"createaddition:charging",
        "input": {
            "item": "minecraft:diamond",
            "count": 1
        },
        "result": {
            "item": "create_new_age:overcharged_diamond",
            "count": 1
        },
        "energy": 10000,
        "maxChargeRate": 500
    }).id("ico:magnetized_iron")

    inter = 'create_new_age:incomplete_reactor_casing'
	e.recipes.create.sequenced_assembly([
		Item.of('2x create_new_age:reactor_casing').withChance(16.0)
	], 'kubejs:blast_brick', [
		e.recipes.createDeploying(inter, [inter, 'kubejs:magnetized_iron']),
		e.recipes.createPressing(inter,inter),
	]).transitionalItem(inter).loops(1).id("ico:new_age_reactor_casing")

    e.recipes.createDeploying('create_new_age:reactor_glass', 'create_new_age:reactor_casing', 'kubejs:tempered_glass').id('ico:new_age_reactor_glass')
})