// locked[][] for t/f - size candidate_count^2
// pairs[] tuple for winner/loser - size paircount

void lock_pairs(void)
{
    // (DO) Lock in all edges
    for (int i = 0; i < pair_count; i++) {
        locked[pairs[i].winner][pairs[i].loser] = true;
    }

    // For each candidate in graph
    for (int i = 0; i < MAX; i++) {
        int visited_array[MAX] = {-1, -1, -1, -1, -1, -1, -1, -1, -1};
        visited_array[0] = pairs[i].winner;
        int arrayindex = 1;
        // For every person in visited_array
        for (int j = 0; j < MAX; j++) {
            int current_target = visited_array[j];
            // first check if immediate descendant already in visited array (with for loop 0-9)
            for (int k = 0; k < MAX; k++) {
                if (locked[current_target][k] == true) {
                    // loop thru every entry in visited_array
                    int isPresent = 0;
                    for (int l = 0; l < MAX; l++) {
                        if (k == visited_array[l]) {
                            isPresent = 1;
                        }
                    }
                    // If not, then add all immediate descendants to visited array (with if statement)
                    if (isPresent == 0) {
                        visited_array[arrayindex] = k;
                        arrayindex++;
                    } else if (isPresent == 1) {
                        locked[current_target][k] = false;
                    }
                }
            }
        }
    }
    return;
}

//