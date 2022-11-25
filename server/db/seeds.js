use banana_counter;

db.dropDatabase();

db.instructor.insertMany(
    [
        {name: "Jarrod"},
        {name: "Stan"},
        {name: "John"}
    ] 
)

db.reporter.insertMany(
    [
        {name: "Esau"},
        {name: "Sara"},
        {name: "James"},
        {name: "Takako"}
    ] 
)

db.placeholder.insertMany(
    [
        {word: "banana"},
        {word: "batman"}
    ] 
)