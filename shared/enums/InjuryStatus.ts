export enum InjuryStatus {
    Active = "Active", // Player is active and available for selection
    Probable = "Probable", // Player is likely to play, but not confirmed
    Questionable = "Questionable", // Player's status is uncertain, may play or not
    Doubtful = "Doubtful", // Player is unlikely to play
    Out = "Out" // Player is confirmed to be out for the game
}