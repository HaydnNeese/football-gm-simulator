export interface PlayerStats {
    season?: number; // e.g., 2024
    playerId?: string;
    teamId?: string; // For tracking team played with that season
    gamesPlayed?: number;
    gamesStarted?: number;
    snaps?: number;

    // Rushing
    rushingAttempts?: number;
    rushingYards?: number;
    yardsPerCarryt?: number;
    yardsAfterContact?: number;
    yardsPerGame?: number;
    rushingLong?: number; // Longest rush of the season
    rushingTouchdowns?: number;
    fumblesLost?: number;

    // Receiving
    receptions?: number;
    receivingYards?: number;
    yardsPerReception?: number;
    yardsAfterCatch?: number;
    yardsPerTarget?: number;
    airYards?: number; // Total yards traveled by the ball in the air on all targets
    receivingLong?: number; // Longest reception of the season
    targets?: number; // Total targets in the season
    receivingTouchdowns?: number;
    drops?: number;

    // Passing
    passingAttempts?: number;
    passingCompletions?: number;
    passingYards?: number;
    yardsPerPass?: number;
    yardsPerCompletion?: number;
    completionPercentage?: number;
    passingTouchdowns?: number;
    interceptions?: number;
    sacksTaken?: number;
    passerRating?: number;

    // Blocking (OL)
    pancakes?: number;
    sacksAllowed?: number;
    hurriesAllowed?: number;

    // Defense
    tackles?: number;
    tacklesForLoss?: number;
    sacks?: number;
    interceptionsMade?: number;
    forcedFumbles?: number;
    fumbleRecoveries?: number;
    passesDefended?: number;
    defensiveTouchdowns?: number;

    // Special Teams
    fieldGoalsMade?: number;
    fieldGoalsAttempted?: number;
    extraPointsMade?: number;
    extraPointsAttempted?: number;
    punts?: number;
    puntYards?: number;
    kickReturns?: number;
    kickReturnYards?: number;
    puntReturns?: number;
    puntReturnYards?: number;
    specialTeamsTouchdowns?: number;

    // Penalties
    penaltiesCommitted?: number;
    penaltyYards?: number;
}
