ServerEvents.recipes(e => {
    let stonedecor = (id) => {
        e.shaped('4x kubejs:polished_' + id, [
            'AA',
            'AA'
        ], {
            A: 'kubejs:' + id + '_ore'
        }).id('ico:polished_' + id)
        e.stonecutting('kubejs:polished_' + id, '#ico:' + id + '_blocks')
        /*
        e.stonecutting('kubejs:chisled_' + id, '#ico:' + id + '_blocks')
        */
    }
    stonedecor("malachite")
    stonedecor("hematite")
    stonedecor("sphalerite")
    stonedecor("pentlandite")
    stonedecor("bauxite")
    stonedecor("limonite")
})