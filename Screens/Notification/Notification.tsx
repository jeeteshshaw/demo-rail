import { StyleSheet, View, FlatList, Text } from 'react-native';
import React from 'react';
// import {FlatList} from 'react-native-gesture-handler';
// import {Rtext} from '../../../Components/Rtext';
import { useFocusEffect, useTheme } from '@react-navigation/native';
// import GS from '../../../Styles/GlobalStyle';
// import {grey, ThemeDarkBlue, ThemeRed} from '../../../config/Colors';
// import {useDispatch, useSelector} from 'react-redux';
// import {getNotificationData} from '../../../store/notification';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import moment from 'moment';
const Notification = () => {
    const { colors } = useTheme();
    //   const dispatch = useDispatch();
    //   const notificaton = useSelector(state => state.notification);
    //   useFocusEffect(
    //     React.useCallback(() => { 
    //       dispatch(getNotificationData());
    //     }, []),
    //   );
    // return (
    //     <Text>Notification</Text>
    // )
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={[1, 2, 3, 4]}
                contentContainerStyle={{ flexGrow: 1 }}
                ListEmptyComponent={() => (
                    <Text style={{ textAlign: 'center', color: "#747474", marginTop: 16 }}>
                        No Notification
                    </Text>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 1 }} />}
                renderItem={({ index }: { index: number }) => (
                    <View style={[styles.cardContainer, { backgroundColor: colors.card }]}>
                        <View style={{ flexDirection: "row", alignItems:"center"}}>
                            <View style={styles.dot} />
                            <View>
                                <Text

                                    style={{ color: "red", marginHorizontal: 10, fontWeight: "600", width:"100%" }}>
                                    Hello World
                                </Text>
                            </View>
                        </View>
                        <Text style={{ color: "#747474", marginTop: 6, fontSize: 12 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Text>
                        <View style={styles.datatimeview}>
                            <View
                                style={[styles.dateView, { marginRight: 10 }]}>
                                <AntDesign name="calendar" size={15} color={"blue"} />
                                <Text style={styles.dateTimeText}>
                                    20-10-2023
                                </Text>
                            </View>
                            <View
                                style={styles.dateView}>
                                <Foundation name="clock" size={16} color={"blue"} />
                                <Text style={styles.dateTimeText}>
                                    05:23 AM
                                </Text>
                            </View>

                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default Notification;

const styles = StyleSheet.create({
    cardContainer: {
        padding: 16,
        paddingVertical: 24,

    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 16,
        backgroundColor: "red",
    },
    datatimeview: {
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'flex-end',
        marginTop: 5,
    },
    dateView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateTimeText: { color: "#747474", paddingHorizontal: 4, fontSize: 12, fontWeight: "400" }

});
