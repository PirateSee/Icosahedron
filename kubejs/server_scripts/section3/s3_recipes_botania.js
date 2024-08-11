ServerEvents.recipes(e => {
    e.remove({id: 'botania:terra_plate'})
    e.remove({id: 'botania:incense_plate'})

    e.custom({
            "type": "botania:petal_apothecary",
            "ingredients": [
                {
                    "item": "botania:rune_water"
                },
                {
                    "item": "botania:rune_earth"
                },
                {
                    "item": "botania:rune_mana"
                },
                {
                    "item": "botania:rune_air"
                },
                {
                    "item": "botania:rune_fire"
                }
            ],
            "output": {
                "item": "kubejs:rune_essence"
            },
            "reagent": {
                "tag": "botania:seed_apothecary_reagent"
            }
    })

    e.shaped('botania:terra_plate', [
        '  T',
        'DRD',
        'LSL'
	], {
		R: 'kubejs:rune_essence',
		S: 'botania:manasteel_block',
        L: 'minecraft:lapis_block',
        D: 'botania:mana_diamond',
        T: '#ico:tool/file'
	}).damageIngredient(Item.of('#ico:tool/file')).id('ico:terra_plate')

    e.shaped('botania:incense_plate', [
        '  T',
        'SSL',
	], {
		L: '#botania:livingwood_logs',
        S: 'botania:livingwood_slab',
        T: 'ico:tool/saw'
	}).damageIngredient(Item.of('#ico:tool/saw')).id('ico:incense_plate')
})