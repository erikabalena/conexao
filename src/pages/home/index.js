import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../services/firebaseConnetion";

export function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(value => {
                console.log('Cadastrado com sucesso Danilo!  \n' + value.user.uid);
            })
            .catch(error => console.log(error));
    };

    return (
        <View style={styles.container}>
            <Text>Firebase App</Text>
            <TextInput
                placeholder="Email"
                placeholderTextColor="#313131"
                value={email}
                onChangeText={value => setEmail(value)}
                style={styles.input}
            />
            <TextInput
                placeholder="Senha"
                placeholderTextColor="#313131"
                value={password}
                onChangeText={value => setPassword(value)}
                style={[styles.input, { marginBottom: 104 }]}
            />
            <Button
                title="CADASTRAR"
                onPress={() => createUser()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center"
    },
    input: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: '#313131',
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: 5
    }
});
