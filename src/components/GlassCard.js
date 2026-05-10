import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Spacing } from '../theme/theme';

export const GlassCard = ({ children, style }) => {
    return (
          <View style={[styles.card, style]}>
    {children}
      </View>
    );
};

const styles = StyleSheet.create({
    card: {
          backgroundColor: Colors.glass,
          borderRadius: 24,
          padding: Spacing.md,
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.1)',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.2,
          shadowRadius: 16,
          elevation: 8,
    },
});
