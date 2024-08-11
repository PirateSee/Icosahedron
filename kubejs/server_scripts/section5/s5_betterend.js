ServerEvents.recipes(e => {
    //begone
    e.remove({id: 'betterend:aeternium_shovel'})
    e.remove({id: 'betterend:aeternium_sword'})
    e.remove({id: 'betterend:aeternium_pickaxe'})
    e.remove({id: 'betterend:aeternium_axe'})
    e.remove({id: 'betterend:aeternium_hoe'})
    e.remove({id: 'betterend:aeternium_hammer'})

    e.remove({id: 'betterend:thallasium_shovel'})
    e.remove({id: 'betterend:thallasium_sword'})
    e.remove({id: 'betterend:thallasium_pickaxe'})
    e.remove({id: 'betterend:thallasium_axe'})
    e.remove({id: 'betterend:thallasium_hoe'})
    e.remove({id: 'betterend:thallasium_hammer'})

    e.remove({id: 'betterend:terminite_shovel'})
    e.remove({id: 'betterend:terminite_sword'})
    e.remove({id: 'betterend:terminite_pickaxe'})
    e.remove({id: 'betterend:terminite_axe'})
    e.remove({id: 'betterend:terminite_hoe'})
    e.remove({id: 'betterend:terminite_hammer'})

    e.remove({id: 'betterend:iron_hammer'})
    e.remove({id: 'betterend:gold_hammer'})
    e.remove({id: 'betterend:diamond_hammer'})
    e.remove({id: 'betterend:netherite_hammer'})

    e.remove({type: 'bclib:alloying'})
    e.remove({type: 'bclib:smithing'})

    e.recipes.create.crushing('betterend:endstone_dust', 'minecraft:end_stone')
})