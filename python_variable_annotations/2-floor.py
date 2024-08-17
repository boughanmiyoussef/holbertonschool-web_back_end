#!/usr/bin/env python3
import math


"""
This module provides a function to calculate the floor of a float.

Functions:
- floor(n: float) -> int: Returns the largest integer less than or
  equal to the input float.

"""


def floor(n: float) -> int:
    """
    Calculate the floor of a float.

    Parameters:
    n (float): The floating-point number to floor.

    Returns:
    int: The largest integer less than or equal to `n`.

    """
    return math.floor(n)

