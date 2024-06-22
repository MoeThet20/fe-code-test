import { StyleSheet, Text, TouchableOpacity, View, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from 'styles';
import { BackArrowSvg } from 'assets/svg';

type LayoutProps = {
    customStyle?: Object;
    onPress?: () => void;
    leftIcon?: JSX.Element;
    header?: string;
    rightIcon?: JSX.Element;
    children: JSX.Element;
};

export default function Layout(props: LayoutProps) {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={{ ...styles.headerContainer, ...props.customStyle }}>
                    <StatusBar backgroundColor={COLORS.white} />
                    <TouchableOpacity onPress={props.onPress} style={styles.leftBtn}>
                        {props.leftIcon ? props.leftIcon : <BackArrowSvg />}
                    </TouchableOpacity>
                    <View style={styles.headerText}>
                        {props.header && <Text style={styles.header}>{props.header}</Text>}
                    </View>
                    <View style={styles.rightBtn}>{props.rightIcon && props.rightIcon}</View>
                </View>
            </SafeAreaView>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        paddingHorizontal: 12,
        paddingVertical: 30
    },
    leftBtn: {
        flex: 0.1
    },
    headerText: {
        flex: 0.8,
        alignItems: 'center'
    },
    header: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.lg,
        fontWeight: 'bold'
    },
    rightBtn: {
        flex: 0.1
    }
});

// import React from 'react'
// import {
//   TouchableOpacity,
//   View,
//   Text,
//   SafeAreaView,
//   StatusBar,
//   Image,
// } from 'react-native'
// import { styles } from './styles'
// import { COLORS, FONTS, SIZES } from 'styles'
// import P from 'components/typography'

// export default function CustomLayout({
//   title,
//   children,
//   navigation,
//   leftIcon,
//   action
// }) {
//   const onPressBack = () => {
//     if (title == 'Kitting') {
//       navigation.navigate('Home')
//     } else {
//       navigation.goBack()
//     }
//   }
//   return (
//     <View style={styles.mainContainer}>
//   <SafeAreaView style={{ backgroundColor: COLORS.primary }}>
//     <View style={styles.header}>
//       <StatusBar backgroundColor={COLORS.primary} />

//           {leftIcon ? (
//             leftIcon
//           ) : (
//             <TouchableOpacity style={styles.backButton} onPress={onPressBack}>
//               <Image
//                 source={require('../../assets/icons/back_arrow.png')}
//                 style={styles.backArrow}
//               />
//             </TouchableOpacity>
//           )}
//           <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
//             <View style={[styles.titleContainer]}>
//               <Text style={styles.title}>{title}</Text>
//             </View>
//             <View style={{ alignItems: "flex-end", flex: 0.2 }}>
//               {action}
//               {/* {rightIcon ? (
//               <>
//                 {cartCount && cartCount > 0 ? (
//                   <View style={styles.countIcon}>
//                     <P
//                       fontSize={SIZES.xs}
//                       color={COLORS.white}
//                       fontFamily={FONTS.semiBold}
//                     >
//                       {cartCount}
//                     </P>
//                   </View>
//                 ) : (
//                   <></>
//                 )}

//                 <TouchableOpacity
//                   style={styles.cartIcon}
//                   onPress={onPressRightIcon}
//                 >
//                   {rightIcon ? rightIcon : <View />}
//                 </TouchableOpacity>
//               </>
//             ) : (
//               <></>
//             )} */}
//             </View>
//           </View>
//         </View>
//       </SafeAreaView>

//       {children}
//     </View>
//   )
// }
