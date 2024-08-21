ServerEvents.recipes(e => {
    //remove energisers
    e.remove({type: 'create_new_age:energising'})

    e.remove({id: 'create_new_age:shapeless/energiser_t1'})
    e.remove({id: 'create_new_age:shaped/energiser_t2'})
    e.remove({id: 'create_new_age:shaped/energiser_t3'})

    e.remove({id: 'create_new_age:pressing/overcharged_iron'})
    e.remove({id: 'create_new_age:pressing/overcharged_gold'})

    e.remove({id: 'create_new_age:enchanted_golden_apple'})
    //reactor
    e.remove({id: 'create_new_age:reactor/reactor_casing'})
    e.remove({id: 'create_new_age:reactor/reactor_glass'})

    e.remove({id: 'create_new_age:reactor/reactor_glass'})

    //remove wires
    e.remove({id: 'create_new_age:cutting/copper_sheet'})
    e.remove({id: 'create_new_age:cutting/overcharged_iron_sheet'})
    e.remove({id: 'create_new_age:cutting/overcharged_golden_sheet'})
    e.remove({id: 'create_new_age:diamond_wire'})

    //mag
    e.remove({id: 'create_new_age:shaped/layered_magnet'})
    e.remove({id: 'create_new_age:shaped/fluxuated_magnet'})

    e.remove({id: 'create_new_age:shaped/boiler_heater'})

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
    }).id("ico:overcharged_diamond")

    //reactor
    let inter = 'create_new_age:incomplete_casing'
	e.recipes.create.sequenced_assembly([
		Item.of('2x create_new_age:reactor_casing').withChance(16.0)
	], 'kubejs:blast_brick', [
		e.recipes.createDeploying(inter, [inter, 'kubejs:magnetized_iron']),
		e.recipes.createPressing(inter,inter),
	]).transitionalItem(inter).loops(1).id("ico:new_age_reactor_casing")

    e.recipes.createDeploying('create_new_age:reactor_glass', 'create_new_age:reactor_casing', 'kubejs:tempered_glass').id('ico:new_age_reactor_glass')

    //mag
    e.shaped('3x create_new_age:layered_magnet', [
        'GGG',
        'III',
        'GGG'
    ], {
        G: 'create:golden_sheet',
        I: 'kubejs:magnetized_iron'
    })

    e.shaped('2x create_new_age:fluxuated_magnetite', [
        'IMI',
        'MDM',
        'IMI'
    ], {
        M: 'create_new_age:magnetite',
        D: 'create_new_age:overcharged_diamond',
        I: 'kubejs:magnetized_iron'
    })

    e.shaped('create_new_age:heater', [
        '  T',
        'CBC',
        'CIC'
    ], {
        I: 'kubejs:magnetized_iron',
        B: 'create:empty_blaze_burner',
        C: 'kubejs:carbon_steel_sheet',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:boiler_heater')
})