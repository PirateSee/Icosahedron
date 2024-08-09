ServerEvents.recipes(e => {
    e.remove({id: 'botania:terra_plate'})

    e.shaped('botania:terra_plate', [
        'LLL',
        'WMF', 
		'EMA'
	], {
		W: 'botania:rune_water',
        E: 'botania:rune_earth',
        M: 'botania:rune_mana',
        A: 'botania:rune_air', 
        F: 'botania:rune_fire', 
		M: 'botania:manasteel_block',
        L: 'minecraft:lapis_block'
	}).id('ico:terra_plate')
})