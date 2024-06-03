ServerEvents.recipes(e => {

    e.remove({id:'pneumaticcraft:armor_upgrade'})
    e.remove({id:'pneumaticcraft:block_tracker_upgrade'})
    e.remove({id:'pneumaticcraft:charging_upgrade'})
    e.remove({id:'pneumaticcraft:cordinate_tracker_upgrade'})

    e.recipes.create.mechanical_crafting('pneumaticcraft:armor_upgrade', [
		'H H',
        'CNC',
        'UNU',
        ' U '
	], {
		H: 'kubejs:high_pressure_plate',
        N: 'minecraft:netherite_ingot',
        C: 'kubejs:carbon_steel_sheet',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:block_tracker_upgrade', [
		' T ',
        'CTC',
        'HSH',
        'UUU'
	], {
		H: 'kubejs:high_pressure_plate',
        C: 'kubejs:carbon_steel_sheet',
        S: 'minecraft:spyglass',
        T: 'kubejs:tempered_glass',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:charging_upgrade', [
        'HTCTH',
        ' WUW '
	], {
        H: 'kubejs:high_pressure_plate',
		C: 'pneumaticcraft:charging_module',
        T: 'pneumaticcraft:advanced_pressure_tube',
        W: 'kubejs:wrought_iron_spring',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:coordinate_tracker_upgrade', [
        '  D  ',
        'RRGRR',
        '  U  '
	], {
        G: 'pneumaticcraft:gps_tool',
        R: 'kubejs:redstone_cable',
        D: 'kubejs:oled_display',
        U: 'pneumaticcraft:upgrade_matrix'
	})

})