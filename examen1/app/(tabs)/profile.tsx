//Elavorado por Jorge Ramírez 957108
    import { FlatList, View, Text, StyleSheet, Image } from "react-native";
    import { Ionicons } from "@expo/vector-icons";
    import { useRouter } from "expo-router";
    
    const perfil = [
      { nombre: "Juan Perez", email: "juan.perez@unitec.edu", ciudad:"Mexico", miembro:"2022"  },
      
    ];
    
    export default function InventarioScreen() {
      const router = useRouter();
        
      return (
        
        <View style={styles.container}>
           {/* <Image
                   source={require("../../assets/images/1160.jpg")}
                   style={styles.avatar}
                   resizeMode="cover"
                 /> */}
          <View style={styles.header}>
             <Text style={styles.title}>{perfil[0].nombre}</Text>
          </View>
    
          <FlatList
            data={perfil}
            renderItem={({ item }) => (
              <View style={styles.item}>
                
                <View style={styles.infoRow}>
                  <Ionicons name="mail" size={40} color="#3380ff" />
                  <Text style={styles.itemCategory}>{item.email}</Text>
                </View>
    
                <View style={styles.infoRow}>
                  <Ionicons name="location" size={40} color="#3380ff" />
                  <Text style={styles.itemCategory}>{item.ciudad}</Text>
                </View>
    
                <View style={styles.infoRow}>
                  <Ionicons name="calendar" size={40} color="#3380ff" />
                  <Text style={styles.itemCategory}>Miembro desde: {item.miembro}</Text>
                </View>

              </View>
            )}
          />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: "#F5F7FA",
      },
      avatar: {
        height: '40%',
        width: '50%',
        borderRadius: 60,
        borderWidth: 2,
        borderColor: "#4C6EF5",
                
      },

      header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
      },
      title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#2D2E32",
        marginLeft: 10,
      },
      item: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
      itemHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
      },
      itemTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginLeft: 8,
      },
      infoRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        fontSize: 14,
      },
      itemCategory: {
        fontSize: 14,
        color: "#666",
        marginLeft: 8,
      },
      
    });
    