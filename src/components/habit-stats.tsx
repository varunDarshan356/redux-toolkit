import React, { useEffect } from 'react'
import type { AppDispatch, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHabits } from '../store/habit-slice';
import Paper from '@mui/material/Paper';
import { LinearProgress, Typography } from '@mui/material';
import type { Habit } from '../store/habit-slice';

const HabitStats: React.FC = () => {

    const { habits, isLoading, error } = useSelector((state: RootState) => state.habits);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        // Fetch habits from the backend or local storage if needed
        dispatch(fetchHabits());
    }, [dispatch]);

    const getCompletedToday=() => {
        const today = new Date().toISOString().split('T')[0];
        return habits.filter(habit => habit.completedDates.includes(today)).length;
    }

    const getStreak = (habit: Habit) => {
            let streak = 0;
            const currentDate = new Date();
    
            while(true) {
                const dateString = currentDate.toISOString().split('T')[0];
                if (habit.completedDates.includes(dateString)) {
                    streak++;
                    currentDate.setDate(currentDate.getDate() - 1);
                } else {
                    break;
                }
            }
            return streak;
    };

    const getLongestStreak = () => {
        return Math.max(...habits.map(getStreak), 0);
    }

    if (isLoading) {
        return <LinearProgress />;
    }

    if (error) {
        return <Typography color="error">Error: {error}</Typography>;
    }

    return (
        <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
            <Typography variant="h6" component="h2">
                Habit Statistics
            </Typography>
            <Typography variant="body1">    
                Total Habits: {habits.length}
            </Typography>
            <Typography variant="body1">    
                Completed Today: {getCompletedToday()}
            </Typography>
            <Typography variant="body1">    
                Longest Streak: {getLongestStreak()}
            </Typography>

        </Paper>
    )
}

export default HabitStats