import fileSys from "fs";

let oldfilepath = "./Assignment-1/notes.txt";
let newfilepath = "./Assignment-1/alfekyNotes.txt";
let renameFile = false;
let deleteFile = false;

try {
  // Create notes file and
  fileSys.writeFileSync(oldfilepath, "Hello,");

  // Add some text
  fileSys.appendFileSync(oldfilepath, "\nI'm Mohamed Alfeky");
  fileSys.appendFileSync(oldfilepath, "\nAnd I'm a Frontend Developer");

  // Read the file and log it
  const data = fileSys.readFileSync(oldfilepath, "utf8");
  console.log(data);

  // Rename the notes file
  if (renameFile) {
    fileSys.renameSync(oldfilepath, newfilepath);
    console.log("#".repeat(30));
    console.log(`File renamed successfully.`);
  }

  if (deleteFile && renameFile) {
    // If the file renamed then delete the new path
    fileSys.unlinkSync(newfilepath);
    console.log("#".repeat(30));
    console.log(`File deleted successfully.`);
  } else if (deleteFile && !renameFile) {
    // If the file not renamed then delete the old path
    fileSys.unlinkSync(oldfilepath);
    console.log("#".repeat(30));
    console.log(`File deleted successfully.`);
  }
} catch (err) {
  console.error("An error happened:", err);
}
