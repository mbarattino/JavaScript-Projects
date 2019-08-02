function my_Dictionary() {
    var homes = {
        builder: "Gehan",
        floor_plan: "Dartmouth",
        sq_ft: 3000,
        bedrooms: 4,
        baths: 3
    }
    delete homes.builder;
    document.getElementById("Dictionary").innerHTML = homes.builder;
}