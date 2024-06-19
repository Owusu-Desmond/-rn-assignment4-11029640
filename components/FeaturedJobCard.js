import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FeaturedJobCard = ({ job }) => {
    return (
        <TouchableOpacity style={[styles.featuredJobCard, { backgroundColor: job.cardBackground }]}>
            <View style={{display: 'flex', gap: 20}}>
                <View style={{display: 'flex', flexDirection: 'row', gap: 20}}>
                    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#fff', width: 50, height: 50}}>
                        <Image source={job.companyIcon} />
                    </View>
                    <View>
                        <Text style={styles.jobTitle}>{job.jobTitle}</Text>
                        <Text style={styles.company}>{job.company}</Text>
                    </View>
                </View>
                <View style={styles.jobInfo}>
                    <Text style={styles.salary}>{`$${job.salary}/hr`}</Text>
                    <Text style={styles.location}>{job.location}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    featuredJobCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 12,
        marginRight: 16,
        width: 300, // Adjust as needed
        height: 200, // Adjust as needed
    },
    jobInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 12,
    },
    jobTitle: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
        color: '#FFFFFF',
    },
    company: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        color: '#FFFFFF',
    },
    salary: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 14,
        color: '#FFFFFF',
    },
    location: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        color: '#FFFFFF',
    },
});

export default FeaturedJobCard;
